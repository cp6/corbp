<?php

namespace App\Http\Controllers;

use App\Models\Lense;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Inertia\Response
    {
        return Inertia::render('Lenses/Index', [
            'lenses' => []
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Lense $lense)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lense $lense)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lense $lense)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lense $lense)
    {
        //
    }
}
