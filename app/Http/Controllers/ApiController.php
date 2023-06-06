<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\SubLocation;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function subLocationsForLocation(Location $location)
    {
        return SubLocation::where('location_id', $location->id)->without(['location'])->get();
    }

}
