<?php

namespace App\Http\Controllers;

use App\Models\SubLocation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubLocationController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('SubLocation/Index', [

        ]);
    }

    public function create(): \Inertia\Response
    {
        return Inertia::render('SubLocation/Create', [

        ]);
    }

    public function store(Request $request)
    {
        //
    }

    public function show(SubLocation $subLocation): \Inertia\Response
    {
        return Inertia::render('SubLocation/Show', [

        ]);
    }

    public function edit(SubLocation $subLocation): \Inertia\Response
    {
        return Inertia::render('SubLocation/Edit', [

        ]);
    }

    public function update(Request $request, SubLocation $subLocation)
    {
        //
    }

    public function destroy(SubLocation $subLocation)
    {
        try {
            $subLocation->delete();
        } catch (\Exception $exception) {
            return redirect(route('sublocation.show', $subLocation))->with(['response' => ['type' => 'failure', 'message' => 'Failed to delete: ' . $exception->getMessage()]]);
        }

        return redirect(route('sublocation.index'))->with(['response' => ['type' => 'success', 'message' => 'Successfully deleted']]);
    }
}
