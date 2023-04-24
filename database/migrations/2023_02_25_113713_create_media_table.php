<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('media', function (Blueprint $table) {
            $table->char('id', 8)->primary();
            $table->char('parent_id', 8)->nullable()->default(null);
            $table->string('slug', 64);
            $table->integer('group_upload_sequence')->nullable()->default(null);
            $table->unsignedBigInteger('directory_id')->nullable()->default(null);//saved as path id
            $table->unsignedBigInteger('location_id')->nullable()->default(null);
            $table->unsignedBigInteger('sub_location_id')->nullable()->default(null);
            $table->boolean('processed')->default(0);
            $table->boolean('display')->default(1);
            $table->boolean('is_parent')->default(1);
            $table->boolean('is_thumbnail')->default(0);
            $table->tinyInteger('type')->default(1);//1 = image, 2 = video, 3 = who knows

            $table->string('original_filename')->nullable()->default(null);//DSC06548.ARW
            $table->char('extension', 3);//jpg, png, arw, img, mp4, mov, flv etc

            $table->integer('width')->nullable()->default(null);
            $table->integer('height')->nullable()->default(null);
            $table->integer('size')->nullable()->default(null);//bytes
            //$table->integer('bitrate')->nullable()->default(null);//for video
            //$table->integer('duration')->nullable()->default(null);//for video
            //$table->float('framerate')->nullable()->default(null);//for video
            //$table->string('codec', 32)->nullable()->default(null);//for video. h264 or h265 etc
            //$table->boolean('has_audio')->nullable()->default(null);//for video
            $table->boolean('has_watermark')->nullable()->default(null);//for video

            $table->timestamps();
            $table->foreign('directory_id')->references('id')->on('directories')->onDelete('set null');
            $table->foreign('location_id')->references('id')->on('locations')->onDelete('set null');
            $table->foreign('sub_location_id')->references('id')->on('sub_locations')->onDelete('set null');
            $table->foreign('id')->references('id')->on('title_descriptions')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('media');
    }
};
