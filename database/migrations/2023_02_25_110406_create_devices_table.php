<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('devices', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name')->unique();
            $table->string('short_name')->nullable()->default(null);
            $table->string('brand')->nullable()->default(null);
            $table->string('model')->nullable()->default(null);
            $table->string('type',64)->nullable()->default(null);
            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('devices');
    }
};
