<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tag_assigned', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tag_id');
            $table->char('media_id',8);
            $table->timestamps();
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
            $table->foreign('media_id')->references('id')->on('media')->onDelete('cascade');
            $table->unique(['tag_id', 'media_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tag_assigned');
    }
};
