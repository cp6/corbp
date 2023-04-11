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
            'sub_locations' => SubLocation::Paginate(2)
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
            'sub_locations' => $subLocation,
            'response' => \Session::get('response')
        ]);
    }

    public function edit(SubLocation $subLocation): \Inertia\Response
    {
        return Inertia::render('SubLocation/Edit', [
            'resource' => $subLocation,
            'response' => \Session::get('response')
        ]);
    }

    public function update(Request $request, SubLocation $subLocation)
    {
        $request->validate([
            'name' => 'string|required|max:125',
            'slug' => 'string|required|max:64',
            'lat' => 'numeric|sometimes|nullable',
            'lon' => 'numeric|sometimes|nullable',
        ]);


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
