<?php

namespace App\Http\Controllers;

use App\Models\Device;
use App\Models\Location;
use App\Models\Media;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Dashboard', [
            'count' => Media::amount(),
            'latest' => Media::latest(),
            'random' => [
                'locations' => Location::randoms(4),
                'tags' => Tag::randoms(8),
                'devices' => Device::randoms(4)
            ]
        ]);
    }

}
