<?php

use App\Http\Controllers\DeviceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LenseController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TagController;
use Illuminate\Support\Facades\Route;


Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/random', [MediaController::class, 'getRandom'])->name('random');

Route::get('/stats', [MediaController::class, 'statsPage'])->name('stats');

Route::get('/locations', [LocationController::class, 'index'])->name('locations.index');
Route::get('/locations/{location:slug}', [LocationController::class, 'show'])->name('locations.show');

Route::get('/devices', [DeviceController::class, 'index'])->name('device.index');
Route::get('/devices/{device:slug}', [DeviceController::class, 'show'])->name('device.show');

Route::get('/lenses', [LenseController::class, 'index'])->name('lense.index');
Route::get('/lenses/{lense:slug}', [LenseController::class, 'show'])->name('lense.show');

Route::get('/tags', [TagController::class, 'index'])->name('tag.index');
Route::get('/tags/{tag:slug}', [TagController::class, 'show'])->name('tag.show');

Route::post('/m/{media}', [MediaController::class, 'show'])->name('media.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Locations
    Route::get('/locations/create', [LocationController::class, 'create'])->name('locations.create');
    Route::post('/locations', [LocationController::class, 'store'])->name('locations.store');
    Route::get('/locations/{location:slug}/edit', [LocationController::class, 'edit'])->name('locations.edit');
    Route::patch('/locations/{location}', [LocationController::class, 'update'])->name('locations.update');
    Route::delete('/locations/{location}', [LocationController::class, 'destroy'])->name('locations.destroy');

    //Devices
    Route::get('/devices/create', [DeviceController::class, 'create'])->name('device.create');
    Route::post('/devices', [DeviceController::class, 'store'])->name('device.store');
    Route::get('/devices/{device:slug}/edit', [DeviceController::class, 'edit'])->name('device.edit');
    Route::patch('/devices/{device}', [DeviceController::class, 'update'])->name('device.update');
    Route::delete('/devices/{device}', [DeviceController::class, 'destroy'])->name('device.destroy');

    //Lens
    Route::get('/lenses/create', [LenseController::class, 'create'])->name('lense.create');
    Route::post('/lenses', [LenseController::class, 'store'])->name('lense.store');
    Route::get('/lenses/{lense:slug}/edit', [LenseController::class, 'edit'])->name('lense.edit');
    Route::patch('/lenses/{lense}', [LenseController::class, 'update'])->name('lense.update');
    Route::delete('/lenses/{lense}', [LenseController::class, 'destroy'])->name('lense.destroy');

    //Tags
    Route::get('/tags/create', [TagController::class, 'create'])->name('tag.create');
    Route::post('/tags', [TagController::class, 'store'])->name('tag.store');
    Route::get('/tags/{tag:slug}/edit', [TagController::class, 'edit'])->name('tags.edit');
    Route::patch('/tags/{tag}', [TagController::class, 'update'])->name('tag.update');
    Route::delete('/tags/{tag}', [TagController::class, 'destroy'])->name('tag.destroy');

    //Upload
    Route::get('/upload', [MediaController::class, 'upload'])->name('upload');
    Route::get('/upload/progress', [MediaController::class, 'uploadFileProgress'])->name('upload.progress');
    Route::post('/upload', [MediaController::class, 'uploadHandler'])->name('upload.handle');

});

Route::get('/test', function () {
    //return \App\Models\Directory::generateDirectories();
    return \App\Models\Directory::randomDirectory();
});

require __DIR__ . '/auth.php';
