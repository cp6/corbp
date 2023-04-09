<?php

namespace App\Http\Controllers;

use App\Models\Exif;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExifController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Exif $exif)
    {
        //
    }

    public function edit(Exif $exif): \Inertia\Response
    {
        return Inertia::render('Exif/Edit', [

        ]);
    }

    public function update(Request $request, Exif $exif)
    {
        //
    }

    public function destroy(Exif $exif)
    {
        //
    }
}
