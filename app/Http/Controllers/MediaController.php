<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessUpload;
use App\Models\Device;
use App\Models\Directory;
use App\Models\Exif;
use App\Models\Lense;
use App\Models\Location;
use App\Models\Media;
use App\Models\SubLocation;
use App\Models\TitleDescription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class MediaController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Media/Index', [

        ]);
    }

    public function create()
    {
        $locations = Location::get();

        if ($locations->count() === 0) {
            return redirect(route('locations.create'))->with(['response' => ['type' => 'failure', 'message' => 'You must have at least 1 location before uploading']]);
        }

        return Inertia::render('Upload', [
            'locations' => $locations,
            'sub_locations' => SubLocation::get(),
            'upload_size' => ini_get('upload_max_filesize'),
            'files_upload' => ini_get('max_file_uploads'),
            'response' => \Session::get('response')
        ]);
    }

    public function show(Media $media): \Inertia\Response
    {
        //dd($media);
        return Inertia::render('Media/Show', [
            'media' => $media,
            'medium_link' => (!is_null($media->location)) ? asset("media/{$media->location->dir}/{$media->id}_MEDIUM.{$media->extension}") : asset("media/default/{$media->id}_MEDIUM.{$media->extension}"),
            'full_link' => (!is_null($media->location)) ? asset("media/{$media->location->dir}/{$media->id}.{$media->extension}") : asset("media/default/{$media->id}.{$media->extension}"),
            'response' => \Session::get('response')
        ]);
    }

    public function edit(Media $media): \Inertia\Response
    {
        return Inertia::render('Media/Edit', [
            'media' => $media,
            'locations' => Location::get(),
            'response' => \Session::get('response')
        ]);
    }

    public function update(Request $request, Media $media)
    {
        $request->validate([
            'slug' => 'string|required|max:64',
            'title' => 'string|sometimes|nullable|max:64',
            'description' => 'string|sometimes|nullable|max:255',
            'location_id' => 'numeric|sometimes|nullable',
        ]);

        $media_response = $media->update($request->all());

        $title_desc_response = $media->titleDesc()->update([
            'title' => $request->title ?? $media->titleDesc->title,
            'description' => $request->description ?? $media->titleDesc->description,
        ]);

        if ($media_response && $title_desc_response) {
            return redirect(route('media.edit', $media))->with(['response' => ['type' => 'success', 'message' => 'Successfully updated']]);
        }

        if (!$media_response && $title_desc_response) {
            return redirect(route('media.edit', $media))->with(['response' => ['type' => 'failure', 'message' => 'Updating the slug failed']]);
        }

        if ($media_response && !$title_desc_response) {
            return redirect(route('media.edit', $media))->with(['response' => ['type' => 'failure', 'message' => 'Updating the title and desc failed']]);
        }

        return redirect(route('media.edit', $media))->with(['response' => ['type' => 'failure', 'message' => 'Updating failed']]);

    }

    public function destroy(Media $media)
    {
        try {
            $media->delete();
        } catch (\Exception $exception) {
            return redirect(route('media.show', $media))->with(['response' => ['type' => 'failure', 'message' => 'Failed to delete: ' . $exception->getMessage()]]);
        }

        return redirect(route('media.index'))->with(['response' => ['type' => 'success', 'message' => 'Successfully deleted']]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'files' => 'required',
            'location_id' => 'integer|nullable|sometimes:',
        ]);

        if ($request->file('files') !== null) {
            $directory = Directory::random();

            if (isset($request->location_id)) {
                $location = Location::where('id', $request->location_id)->first();
                $location_image_count = Media::where('location_id', $request->location_id)->count();
            }

            $files = $request->file('files');
            $files_count = count($files);

            $success_array = $errors_array = [];

            $start_timer = time();
            Storage::disk('private')->put("uploadProgress.json", json_encode(['progress' => null, 'total_files' => null, 'completed_files' => null]));

            $sequence = $size_tally = 0;
            foreach ($files as $file) {
                $sequence++;

                $media_id = \Str::random(8);

                $extension = $file->extension();
                $size = $file->getSize();
                $size_tally += $size;

                //Get exif information
                //This has to be done before the file is saved to the disk
                $exif_data = Image::make($file)->exif();
                Storage::disk('private')->put("exif/{$directory->name}/{$media_id}.json", json_encode($exif_data));
                //dd($exif_data);
                $height = $exif_data['COMPUTED']['Height'] ?? null;
                $width = $exif_data['COMPUTED']['Width'] ?? null;

                $exif = new Exif();
                $exif->media_id = $media_id;
                $exif->iso = $exif_data['ISOSpeedRatings'] ?? null;
                $exif->f_stop = (isset($exif_data['COMPUTED']['ApertureFNumber'])) ? str_replace("f/", "", $exif_data['COMPUTED']['ApertureFNumber']) : null;
                $exif->f_stop_raw = $exif_data['COMPUTED']['ApertureFNumber'] ?? null;
                $exif->exposure = $exif_data['ExposureBiasValue'] ?? null;
                $exif->flash = $exif_data['Flash'] ?? null;
                $exif->shutter_speed = str_replace("1/", "", $exif_data['ExposureTime'] ?? "");
                $exif->shutter_speed_raw = $exif_data['ExposureTime'] ?? null;
                if (isset($exif_data['FocalLength'])) {
                    $fl_exp = explode("/", $exif_data['FocalLength']);
                    $exif->focal_length = ($fl_exp[0] / $fl_exp[1]);
                }
                $exif->software = $exif_data['Software'] ?? null;

                if (isset($exif_data['Model'])) {
                    $exif->device_id = Device::updateOrCreate(['name' => $exif_data['Model'], 'slug' => $exif_data['Model']], ['brand' => $exif_data['Make']])->value('id');
                }

                if (isset($exif_data['UndefinedTag:0xA434'])) {
                    $exif->lens_id = Lense::updateOrCreate(['name' => $exif_data['UndefinedTag:0xA434'], 'slug' => $exif_data['UndefinedTag:0xA434']])->value('id');
                }

                if (isset($exif_data['DateTimeOriginal'])) {
                    $date_exp = explode(" ", $exif_data['DateTimeOriginal']);
                    $exif->captured_at = str_replace(":", "-", $date_exp[0]) . " " . $date_exp[1];
                }

                try {
                    //Create the media
                    $media = new Media();
                    $media->id = $media_id;
                    $media->slug = (isset($location->name)) ? "{$location->name} " . ($location_image_count + $sequence) : $media_id;
                    $media->type = 1;//Image
                    $media->group_upload_sequence = $sequence;
                    $media->location_id = $request->location_id;
                    $media->extension = $extension;
                    $media->size = $size;
                    $media->height = $height ?? null;
                    $media->width = $width ?? null;
                    $media->directory_id = $directory->id;
                    $media->original_filename = $file->getClientOriginalName();
                    $media->save();

                    $title_desc = new TitleDescription();
                    $title_desc->id = $media_id;
                    $title_desc->title = $media_id;
                    $title_desc->description = null;
                    $title_desc->save();

                    //Save the exif as media now created
                    $exif->save();

                    Storage::disk('private')->put("uploadProgress.json", json_encode(['progress' => round(($sequence / $files_count) * 100), 'total_files' => $files_count, 'completed_files' => $sequence]));

                    $large = $file->storeAs("process", $media_id . '.' . $extension, 'private');
                    //$medium = $file->storeAs("process", $media_id . '_MEDIUM.' . $extension, 'private');
                    //$small = $file->storeAs("process", $media_id . '_SMALL.' . $extension, 'private');
                    //$thumbnail = $file->storeAs("process", $media_id . '_THUMB.' . $extension, 'private');

                    //Make queue worker to do this and then upload:
                    ProcessUpload::dispatch($media);

                    $success_array[] = ['sequence' => $sequence, 'file' => $file->getClientOriginalName(), 'extension' => $extension, 'size' => $size, 'message' => 'success'];
                } catch (\Exception $exception) {
                    $errors_array[] = ['sequence' => $sequence, 'file' => $file->getClientOriginalName(), 'size' => $size, 'extension' => $extension, 'message' => $exception->getMessage()];
                    //dump($exception->getMessage());
                    //exit;
                }

            }
            //dump($errors_array);
            //exit;

            $end_timer = time() - $start_timer;

            if ($end_timer === 0) {//Prevents division by zero error
                $upload_speed_mbps = null;
            } else {
                $upload_speed_mbps = number_format(($size_tally / $end_timer / 1000 / 1000), 2);
            }

            if (!empty($errors_array)) {
                //exit;//For testing show the  errors
                return redirect(route('upload'))->with(['response' => [
                    'type' => 'success',
                    'message' => "Uploaded " . count($success_array) . " files (" . (number_format($size_tally / 1024 / 1024, 2)) . " MB). Errors where found with " . count($errors_array) . " files"]]);
            }

            return redirect(route('upload'))->with(['response' => [
                'type' => 'success',
                'message' => "Successfully uploaded $files_count files in $end_timer seconds, " . (number_format($size_tally / 1024 / 1024, 2)) . " MB at {$upload_speed_mbps} Mbps"]]);

        }

        return redirect(route('upload'))->with(['response' => ['type' => 'failure', 'message' => 'No files submitted']]);

    }

    public static function uploadFileProgress(): \Illuminate\Http\JsonResponse
    {
        $file = json_decode(Storage::disk('private')->get("uploadProgress.json"));
        return response()->json($file)->header('Content-Type', 'application/json');
    }

    public static function statsPage(): \Inertia\Response
    {
        return Inertia::render('Stats', [
            'stats' => []
        ]);
    }

    public static function getRandom(): string
    {
        return "Not in use yet but here is a random string " . \Str::random(24);
    }

}
