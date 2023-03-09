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

        //Make smaller version of the full sized uploaded image
        Media::createSmallerImage($file, storage_path('app/private/process/') . $this->media->id . '_THUMB.' . $this->media->extension, (int)(0.03 * $this->media->width), (int)(0.03 * $this->media->height));
        Media::createSmallerImage($file, storage_path('app/private/process/') . $this->media->id . '_SMALL.' . $this->media->extension, (int)(0.09 * $this->media->width), (int)(0.09 * $this->media->height));
        Media::createSmallerImage($file, storage_path('app/private/process/') . $this->media->id . '_MEDIUM.' . $this->media->extension, (int)(0.2 * $this->media->width), (int)(0.2 * $this->media->height));
        Media::createSmallerImage($file, storage_path('app/private/process/') . $this->media->id . '.' . $this->media->extension, (int)(0.4 * $this->media->width), (int)(0.4 * $this->media->height));

        //Watermark large and medium version images only
        Media::watermarkImage($file, storage_path('app/private/process/') . $this->media->id . '.' . $this->media->extension, 120, 100, 'corbpie_watermark_large.png');
        Media::watermarkImage(Storage::disk('private')->get("process/{$this->media->id}_MEDIUM.{$this->media->extension}"), storage_path('app/private/process/') . $this->media->id . '_MEDIUM.' . $this->media->extension, 80, 80, 'corbpie_watermark_medium.png');
    }

}
