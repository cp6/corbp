<?php

namespace App\Jobs;

use App\Models\Media;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
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

    public function handle(): void
    {
        Log::debug("Queue working: {$this->media->id}");
        Log::debug($this->media);

        $file = Storage::disk('private')->get("process/{$this->media->id}.{$this->media->extension}");

        //Make smaller version of the full sized uploaded image and save into public uploads
        $directory = $this->media->location->dir ?? 'default';
        $upload_directory = "app/public/{$directory}/";
        $extension = $this->media->extension;

        if (!Storage::disk('public')->exists($directory)) {
            Storage::disk('public')->makeDirectory($directory);
        }

        Media::createSmallerImage($file, storage_path($upload_directory) . $this->media->id . '_THUMB.' . $extension, (int)(0.03 * $this->media->width), (int)(0.03 * $this->media->height));
        Media::createSmallerImage($file, storage_path($upload_directory) . $this->media->id . '_SMALL.' . $extension, (int)(0.09 * $this->media->width), (int)(0.09 * $this->media->height));
        Media::createSmallerImage($file, storage_path($upload_directory) . $this->media->id . '_MEDIUM.' . $extension, (int)(0.2 * $this->media->width), (int)(0.2 * $this->media->height));
        Media::createSmallerImage($file, storage_path($upload_directory) . $this->media->id . '.' . $extension, (int)(0.4 * $this->media->width), (int)(0.4 * $this->media->height));

        //Watermark large and medium version images only
        Media::watermarkImage($file, storage_path($upload_directory) . $this->media->id . '.' . $extension, 120, 100, 'corbpie_watermark_large.png');
        Media::watermarkImage(Storage::disk('public')->get("{$directory}/{$this->media->id}_MEDIUM.{$extension}"), storage_path($upload_directory) . $this->media->id . '_MEDIUM.' . $extension, 80, 80, 'corbpie_watermark_medium.png');

        //Delete the original uploaded file
        Storage::disk('private')->delete("process/{$this->media->id}.{$extension}");

        $this->media->update(['processed' => 1]);
    }


}
