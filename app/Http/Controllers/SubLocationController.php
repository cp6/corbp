<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\Media;
use App\Models\SubLocation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class SubLocationController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('SubLocation/Index', [
            'sub_locations' => SubLocation::Paginate(8)
        ]);
    }

    public function forLocationApi(Location $location)
    {
        return SubLocation::where('location_id', $location->id)->without(['location'])->get();
    }

    public function create(): \Inertia\Response
    {
        return Inertia::render('SubLocation/Create', [
            'locations' => Location::cached(),
            'response' => \Session::get('response')
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'location_id' => 'integer|required',
            'name' => 'string|required|max:125',
            'slug' => 'string|required|max:64',
            'lat' => 'numeric|sometimes|nullable',
            'lon' => 'numeric|sometimes|nullable',
        ]);

        try {

            $location = new SubLocation();
            $location->location_id = $request->location_id;
            $location->name = $request->name;
            $location->slug = strtolower(trim(str_replace(" ", "-", preg_replace('/[^a-zA-Z0-9-]/', '', $request->slug))));
            $location->lat = $request->lat ?? null;
            $location->lon = $request->lon ?? null;
            $location->save();

        } catch (\Exception $exception) {

            return redirect(route('sub-location.create'))->with(['response' => ['type' => 'failure', 'message' => 'Could not be created: ' . $exception->getMessage()]]);
        }

        Cache::forget("locations");

        return redirect(route('sub-location.create'))->with(['response' => ['type' => 'success', 'message' => 'Successfully created']]);
    }

    public function show(SubLocation $subLocation): \Inertia\Response
    {
        return Inertia::render('SubLocation/Show', [
            'sub_location' => $subLocation,
            'media' => Media::forSubLocation($subLocation, $request->page ?? 1),
            'response' => \Session::get('response')
        ]);
    }

    public function edit(SubLocation $subLocation): \Inertia\Response
    {
        return Inertia::render('SubLocation/Edit', [
            'resource' => $subLocation,
            'locations' => Location::cached(),
            'response' => \Session::get('response')
        ]);
    }

    public function update(Request $request, SubLocation $subLocation)
    {
        $request->validate([
            'location_id' => 'integer|required',
            'name' => 'string|required|max:125',
            'slug' => 'string|required|max:64',
            'lat' => 'numeric|sometimes|nullable',
            'lon' => 'numeric|sometimes|nullable',
        ]);

        $response = $subLocation->update($request->all());

        if ($response) {
            return redirect(route('sub-location.edit', $subLocation))->with(['response' => ['type' => 'success', 'message' => 'Successfully updated']]);
        }

        Cache::forget("locations");

        return redirect(route('sub-location.edit', $subLocation))->with(['response' => ['type' => 'failure', 'message' => 'Updating failed']]);

    }

    public function destroy(SubLocation $subLocation)
    {
        try {
            $subLocation->delete();
        } catch (\Exception $exception) {
            return redirect(route('sub-location.show', $subLocation))->with(['response' => ['type' => 'failure', 'message' => 'Failed to delete: ' . $exception->getMessage()]]);
        }

        return redirect(route('sub-location.index'))->with(['response' => ['type' => 'success', 'message' => 'Successfully deleted']]);
    }

}
