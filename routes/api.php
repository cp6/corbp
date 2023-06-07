<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\LocationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth:api'])->group(function () {

    Route::post('geo', [LocationController::class, 'geoApiCall'])->name('api.geo.query');

    Route::get('/sub-locations/{location}', [ApiController::class, 'subLocationsForLocation'])->name('api.sub-location.show');

});
