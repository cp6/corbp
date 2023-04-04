<?php

use App\Http\Controllers\DeviceController;
use App\Http\Controllers\LenseController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    abort(503);
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/random', [MediaController::class, 'getRandom'])->name('random');

Route::get('/stats', [MediaController::class, 'statsPage'])->name('stats');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Locations
    Route::get('/locations', [LocationController::class, 'index'])->name('locations.index');
    Route::get('/locations/create', [LocationController::class, 'create'])->name('locations.create');
    Route::get('/locations/{location:slug}', [LocationController::class, 'show'])->name('locations.show');
    Route::post('/locations', [LocationController::class, 'store'])->name('locations.store');
    Route::get('/locations/{location:slug}/edit', [LocationController::class, 'edit'])->name('locations.edit');
    Route::patch('/locations/{location}', [LocationController::class, 'update'])->name('locations.update');
    Route::delete('/locations/{location}', [LocationController::class, 'destroy'])->name('locations.destroy');

    //Devices
    Route::get('/devices', [DeviceController::class, 'index'])->name('device.index');
    Route::get('/devices/create', [DeviceController::class, 'create'])->name('device.create');
    Route::get('/devices/{device:slug}', [DeviceController::class, 'show'])->name('device.show');
    Route::post('/devices', [DeviceController::class, 'store'])->name('device.store');
    Route::get('/devices/{device:slug}/edit', [DeviceController::class, 'edit'])->name('device.edit');
    Route::patch('/devices/{device}', [DeviceController::class, 'update'])->name('device.update');
    Route::delete('/devices/{device}', [DeviceController::class, 'destroy'])->name('device.destroy');

    //Lens
    Route::get('/lenses', [LenseController::class, 'index'])->name('lense.index');
    Route::get('/lenses/create', [LenseController::class, 'create'])->name('lense.create');
    Route::get('/lenses/{lense:slug}', [LenseController::class, 'show'])->name('lense.show');
    Route::post('/lenses', [LenseController::class, 'store'])->name('lense.store');
    Route::get('/lenses/{lense:slug}/edit', [LenseController::class, 'edit'])->name('lense.edit');
    Route::patch('/lenses/{lense}', [LenseController::class, 'update'])->name('lense.update');
    Route::delete('/lenses/{lense}', [LenseController::class, 'destroy'])->name('lense.destroy');

    Route::get('/upload', [MediaController::class, 'upload'])->name('upload');
    Route::get('/upload/progress', [MediaController::class, 'uploadFileProgress'])->name('upload.progress');
    Route::post('/upload', [MediaController::class, 'uploadHandler'])->name('upload.handle');

    Route::post('/m/{media}', [MediaController::class, 'show'])->name('media.show');

});

Route::get('/test', function () {
    //return \App\Models\Directory::generateDirectories();
    return \App\Models\Directory::randomDirectory();
   // return \App\Models\Location::getGeoApiData('lake eppalock, victoria, australia');
});

require __DIR__ . '/auth.php';
