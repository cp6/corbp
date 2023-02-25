<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name')->unique();
            $table->string('area')->nullable()->default(null);
            $table->string('state')->nullable()->default(null);
            $table->char('state_short', 3)->nullable()->default(null);
            $table->string('country')->nullable()->default(null);
            $table->char('country_code', 3)->nullable()->default(null);
            $table->integer('postcode')->nullable()->default(null);
            $table->decimal('lat', 10, 7)->nullable()->default(null);
            $table->decimal('lon', 10, 7)->nullable()->default(null);
            $table->integer('media_count')->nullable()->default(null);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('locations');
    }
};
