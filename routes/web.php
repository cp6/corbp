<?php

use App\Http\Controllers\DeviceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LenseController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubLocationController;
use App\Http\Controllers\TagController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

//Random media
Route::get('/random', [MediaController::class, 'getRandom'])->name('random');

//Media
Route::get('/m/{media}', [MediaController::class, 'show'])->name('media.show');

//Stats
Route::get('/stats', [MediaController::class, 'statsPage'])->name('stats');

//Locations
Route::get('/locations', [LocationController::class, 'index'])->name('locations.index');
Route::get('/locations/create', [LocationController::class, 'create'])->middleware(['auth'])->name('locations.create');
Route::get('/locations/{location:slug}', [LocationController::class, 'show'])->name('locations.show');

//Sub locations
Route::get('/sub-locations', [SubLocationController::class, 'index'])->name('sub-location.index');
Route::get('/sub-locations/create', [SubLocationController::class, 'create'])->middleware(['auth'])->name('sub-location.create');
Route::get('/sub-locations/{subLocation:slug}', [SubLocationController::class, 'show'])->name('sub-location.show');

//Devices
Route::get('/devices', [DeviceController::class, 'index'])->name('device.index');
Route::get('/devices/{device:slug}', [DeviceController::class, 'show'])->name('device.show');

//Lenses
Route::get('/lenses', [LenseController::class, 'index'])->name('lense.index');
Route::get('/lenses/{lense:slug}', [LenseController::class, 'show'])->name('lense.show');

//Tags
Route::get('/tags', [TagController::class, 'index'])->name('tag.index');
Route::get('/tags/create', [TagController::class, 'create'])->middleware(['auth'])->name('tag.create');
Route::get('/tags/{tag:slug}', [TagController::class, 'show'])->name('tag.show');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Media
    Route::get('/m/{media}/edit', [MediaController::class, 'edit'])->name('media.edit');
    Route::patch('/m/{media}', [MediaController::class, 'update'])->name('media.update');

    //Locations
    Route::post('/locations', [LocationController::class, 'store'])->name('locations.store');
    Route::get('/locations/{location:slug}/edit', [LocationController::class, 'edit'])->name('locations.edit');
    Route::patch('/locations/{location}', [LocationController::class, 'update'])->name('locations.update');
    Route::delete('/locations/{location}', [LocationController::class, 'destroy'])->name('locations.destroy');

    //Sub locations
    Route::post('/sub-locations', [SubLocationController::class, 'store'])->name('sub-location.store');
    Route::get('/sub-locations/{subLocation:slug}/edit', [SubLocationController::class, 'edit'])->name('sub-location.edit');
    Route::patch('/sub-locations/{subLocation}', [SubLocationController::class, 'update'])->name('sub-location.update');
    Route::delete('/sub-locations/{subLocation}', [SubLocationController::class, 'destroy'])->name('sub-location.destroy');

    //Devices
    Route::post('/devices', [DeviceController::class, 'store'])->name('device.store');
    Route::get('/devices/{device:slug}/edit', [DeviceController::class, 'edit'])->name('device.edit');
    Route::patch('/devices/{device}', [DeviceController::class, 'update'])->name('device.update');
    Route::delete('/devices/{device}', [DeviceController::class, 'destroy'])->name('device.destroy');

    //Lens
    Route::post('/lenses', [LenseController::class, 'store'])->name('lense.store');
    Route::get('/lenses/{lense:slug}/edit', [LenseController::class, 'edit'])->name('lense.edit');
    Route::patch('/lenses/{lense}', [LenseController::class, 'update'])->name('lense.update');
    Route::delete('/lenses/{lense}', [LenseController::class, 'destroy'])->name('lense.destroy');

    //Tags
    Route::post('/tags', [TagController::class, 'store'])->name('tag.store');
    Route::get('/tags/{tag:slug}/edit', [TagController::class, 'edit'])->name('tags.edit');
    Route::patch('/tags/{tag}', [TagController::class, 'update'])->name('tag.update');
    Route::delete('/tags/{tag}', [TagController::class, 'destroy'])->name('tag.destroy');

    //Upload
    Route::get('/upload', [MediaController::class, 'create'])->name('upload');
    Route::get('/upload/progress', [MediaController::class, 'uploadFileProgress'])->name('upload.progress');
    Route::post('/upload', [MediaController::class, 'store'])->name('upload.handle');
});

require __DIR__ . '/auth.php';
