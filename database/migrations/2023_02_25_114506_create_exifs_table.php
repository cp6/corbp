<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('exifs', function (Blueprint $table) {
            $table->id();
            $table->char('media_id', 8)->unique();
            $table->unsignedBigInteger('device_id')->nullable()->default(null);
            $table->unsignedBigInteger('lens_id')->nullable()->default(null);
            $table->integer('iso')->nullable()->default(null);
            $table->string('f_stop_raw')->nullable()->default(null);
            $table->float('f_stop')->nullable()->default(null);
            $table->string('exposure')->nullable()->default(null);
            $table->string('shutter_speed_raw')->nullable()->default(null);
            $table->integer('shutter_speed')->nullable()->default(null);
            $table->integer('focal_length')->nullable()->default(null);
            $table->decimal('lat', 10, 7)->nullable()->default(null);
            $table->decimal('lon', 10, 7)->nullable()->default(null);
            $table->integer('direction')->nullable()->default(null);
            $table->integer('height')->nullable()->default(null);
            $table->integer('flash')->nullable()->default(null);
            $table->string('software')->nullable()->default(null);
            $table->dateTime('captured_at')->nullable()->default(null);
            $table->timestamps();

            $table->foreign('media_id')->references('id')->on('media')->onDelete('cascade');
            $table->foreign('device_id')->references('id')->on('devices')->onDelete('set null');
            $table->foreign('lens_id')->references('id')->on('lenses')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('exifs');
    }
};
