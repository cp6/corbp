<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('title_descriptions', function (Blueprint $table) {
            $table->char('id', 8)->primary();
            $table->string('title',125)->nullable()->default(null);
            $table->string('description',500)->nullable()->default(null);
            $table->timestamps();
            $table->foreign('id')->references('id')->on('media')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('title_descriptions');
    }
};
