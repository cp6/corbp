<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessUpload;
use App\Models\Device;
use App\Models\Directory;
use App\Models\Exif;
use App\Models\Lense;
use App\Models\Location;
use App\Models\Media;
use App\Models\MediaTitleDesc;
use App\Models\SubLocation;
use App\Models\TitleDescription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class MediaController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Media $media)
    {
        //
    }

    public function edit(Media $media)
    {
        //
    }

    public function update(Request $request, Media $media)
    {
        //
    }

    public function destroy(Media $media)
    {
        //
    }

    public function upload(): \Inertia\Response
    {
        return Inertia::render('Upload', [
            'locations' => Location::get(),
            'sub_locations' => SubLocation::get(),
            'upload_size' => ini_get('upload_max_filesize'),
            'files_upload' => ini_get('max_file_uploads'),
            'response' => \Session::get('response')
        ]);
    }

    public function uploadHandler(Request $request)
    {
        $request->validate([
            'files' => 'required',
            'location_id' => 'integer|nullable|sometimes:',
        ]);

        if ($request->file('files') !== null) {
            $is_image = null;
            $directory = Directory::randomDirectory();

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

                $title_desc = new TitleDescription();
                $title_desc->id = $media_id;
                $title_desc->title = null;
                $title_desc->description = null;
                $title_desc->save();

                $extension = $file->extension();
                $size = $file->getSize();
                $size_tally += $size;

                (in_array($extension, ['jpg', 'png', 'arw', 'img', 'heic'], true)) ? $is_image = true : $is_image = false;

                if ($is_image) {//Image
                    //Get exif information
                    //This has to be done before the file is saved to the disk
                    $exif_data = Image::make($file)->exif();
                    dd($exif_data);
                    Storage::disk('private')->put("exif/{$directory['name']}/{$media_id}.json", json_encode($exif_data));
                    //dd($exif_data);
                    $height = $exif_data['COMPUTED']['Height'] ?? null;
                    $width = $exif_data['COMPUTED']['Width'] ?? null;

                    $exif = new Exif();
                    $exif->media_id = $media_id;
                    $exif->iso = $exif_data['ISOSpeedRatings'] ?? null;
                    $exif->f_stop = str_replace("f/", "", $exif_data['COMPUTED']['ApertureFNumber']);
                    $exif->f_stop_raw = $exif_data['COMPUTED']['ApertureFNumber'] ?? null;
                    $exif->exposure = $exif_data['ExposureBiasValue'] ?? null;
                    $exif->flash = $exif_data['Flash'] ?? null;
                    $exif->shutter_speed = str_replace("1/", "", $exif_data['ExposureTime']);
                    $exif->shutter_speed_raw = $exif_data['ExposureTime'] ?? null;
                    $fl_exp = explode("/", $exif_data['FocalLength']);
                    $exif->focal_length = ($fl_exp[0] / $fl_exp[1]);
                    $exif->software = $exif_data['Software'] ?? null;

                    if (isset($exif_data['Model'])) {
                        $exif->device_id = Device::updateOrCreate(['name' => $exif_data['Model'], 'slug' => $exif_data['Model']], ['brand' => $exif_data['Make']])->value('id');
                    }

                    if (isset($exif_data['UndefinedTag:0xA434'])) {
                        $exif->lens_id = Lense::updateOrCreate(['name' => $exif_data['UndefinedTag:0xA434'], 'slug' => $exif_data['UndefinedTag:0xA434']])->value('id');
                    }

                    $date_exp = explode(" ", $exif_data['DateTimeOriginal']);
                    $exif->captured_at = str_replace(":", "-", $date_exp[0]) . " " . $date_exp[1];

                } else {//Video
                    if (!in_array($extension, ['mp4', 'mkv', 'mov', 'flv'], true)) {
                        //Not a video file
                    }
                    //Get video details like bitrate, FPS and audio etc
                }

                try {
                    //Create the media
                    $media = new Media();
                    $media->id = $media_id;
                    $media->slug = (isset($location->name)) ? "{$location->name} " . ($location_image_count + $sequence) : $media_id;
                    $media->type = ($is_image) ? 1 : 2;
                    $media->group_upload_sequence = $sequence;
                    $media->location_id = $request->location_id;
                    $media->extension = $extension;
                    $media->size = $size;
                    $media->height = $height ?? null;
                    $media->width = $width ?? null;
                    $media->directory_id = $directory['id'] ?? null;
                    $media->original_filename = $file->getClientOriginalName();
                    $media->save();

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

}
