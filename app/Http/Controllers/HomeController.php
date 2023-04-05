<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Dashboard', [
            'count' => 0,
            'latest' => [],
            'random' => [
                'locations' => [],
                'tags' => [],
                'devices' => []
            ]
        ]);
    }
}
