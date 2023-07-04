<?php

namespace App\Http\Controllers;

use App\Models\Exif;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExifController extends Controller
{
    public function show(Exif $exif): \Inertia\Response
    {
        return Inertia::render('Exif/Show', [

        ]);
    }

    public function edit(Exif $exif): \Inertia\Response
    {
        return Inertia::render('Exif/Edit', [

        ]);
    }

    public function update(Request $request, Exif $exif): void
    {
        //
    }

}
