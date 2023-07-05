<?php

namespace App\Jobs;

use App\Models\Media;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProcessUpload implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public Media $media,
    )
    {
    }

    public function handle(): Media
    {
        $media = $this->media;

        Log::debug("ProcessUpload STARTED: {$media->id} {$media->original_filename} {$media->width}x{$media->height} " . number_format($media->height / 1024, 2) . "MB");

        $file = Storage::disk('private')->get("process/{$media->id}.{$media->extension}");

        //Make smaller version of the full sized uploaded image and save into public uploads
        $directory = $media->directory->name;
        $upload_directory = "app/public/{$directory}/";
        $extension = $media->extension;
        $storage_path = storage_path($upload_directory);

        if (!Storage::disk('public')->exists($directory)) {
            Storage::disk('public')->makeDirectory($directory);
        }

        Media::createSmallerImage($file, $storage_path . $media->id . '_THUMB.' . $extension, (0.03 * $media->width), (0.03 * $media->height));
        Media::createSmallerImage($file, $storage_path . $media->id . '_SMALL.' . $extension, (0.09 * $media->width), (0.09 * $media->height));
        Media::createSmallerImage($file, $storage_path . $media->id . '_MEDIUM.' . $extension, (0.2 * $media->width), (0.2 * $media->height));
        Media::createSmallerImage($file, $storage_path . $media->id . '.' . $extension, (0.41 * $media->width), (0.41 * $media->height));

        //Watermark large and medium version images only
        Media::watermarkImage($storage_path . $media->id . '.' . $extension, $storage_path . $media->id . '.' . $extension, 200, 180, 'corbpie_watermark_large.png');
        Media::watermarkImage(Storage::disk('public')->get("{$directory}/{$media->id}_MEDIUM.{$extension}"), $storage_path . $media->id . '_MEDIUM.' . $extension, 80, 80, 'corbpie_watermark_medium.png');

        //Delete the original uploaded file
        Storage::disk('private')->delete("process/{$media->id}.{$extension}");

        $media->directory->increment('count');//Add 1 to directory media count
        $media->location->increment('media_count');//Add 1 to location media count

        $media->update(['processed' => 1, 'display' => 1]);//Mark media as processed and displayable

        Cache::forget("media.location.{$media->location->id}");//Clear the media for location cache
        Cache::forget("stats");//Clear stats cache

        Log::debug("ProcessUpload FINISHED: {$media->id}");

        return $media;
    }

}
