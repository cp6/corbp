<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sub_locations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('location_id');
            $table->string('slug')->unique();
            $table->string('name')->unique();
            $table->integer('media_count')->default(0);
            $table->decimal('lat', 10, 7)->nullable()->default(null);
            $table->decimal('lon', 10, 7)->nullable()->default(null);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sub_locations');
    }
};
