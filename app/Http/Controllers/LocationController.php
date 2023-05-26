<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Inertia\Inertia;

class LocationController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        return Inertia::render('Location/Index', [
            'locations' => Location::Paginate(8)
        ]);
    }

    public function create(): \Inertia\Response
    {
        return Inertia::render('Location/Create', ['response' => \Session::get('response')]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'string|required|max:125',
            'state' => 'string|sometimes|nullable|max:64',
            'area' => 'string|sometimes|nullable|max:125',
            'postcode' => 'integer|sometimes|nullable',
            'lat' => 'numeric|sometimes|nullable',
            'lon' => 'numeric|sometimes|nullable',
            'country' => 'string|sometimes|nullable|max:125',
            'country_code' => 'string|sometimes|nullable|size:3',
            'desc' => 'string|sometimes|nullable|max:255',
        ]);

        try {

            $location = new Location();
            $location->dir = Str::random(8);
            $location->name = $request->name;
            $location->slug = strtolower(trim(str_replace(" ", "-", preg_replace("/[^a-zA-Z ]+/", "", $request->name))));
            $location->area = $request->area ?? null;
            $location->state = $request->state ?? null;
            $location->country = $request->country ?? null;
            $location->country_code = $request->country_code ?? null;
            $location->postcode = $request->postcode ?? null;
            $location->lat = $request->lat ?? null;
            $location->lon = $request->lon ?? null;
            $location->desc = $request->desc ?? null;
            $location->save();

        } catch (\Exception $exception) {

            return redirect(route('locations.create'))->with(['response' => ['type' => 'failure', 'message' => 'Could not be created: ' . $exception->getMessage()]]);
        }

        Cache::forget("locations");

        return redirect(route('locations.create'))->with(['response' => ['type' => 'success', 'message' => 'Successfully created']]);

    }

    public function show(Location $location): \Inertia\Response
    {
        return Inertia::render('Location/Show', [
            'location' => $location,
            'media' => Media::forLocation($location),
            'response' => \Session::get('response')
        ]);
    }

    public function edit(Location $location): \Inertia\Response
    {
        return Inertia::render('Location/Edit', [
            'resource' => $location,
            'response' => \Session::get('response')
        ]);
    }

    public function update(Request $request, Location $location)
    {
        $request->validate([
            'name' => 'string|required|max:125',
            'state' => 'string|sometimes|nullable|max:64',
            'area' => 'string|sometimes|nullable|max:125',
            'postcode' => 'integer|sometimes|nullable',
            'lat' => 'numeric|sometimes|nullable',
            'lon' => 'numeric|sometimes|nullable',
            'country' => 'string|sometimes|nullable|max:125',
            'country_code' => 'string|sometimes|nullable|size:3',
            'desc' => 'string|sometimes|nullable|max:255'
        ]);

        $response = $location->update($request->all());

        if ($response) {
            return redirect(route('locations.edit', $location))->with(['response' => ['type' => 'success', 'message' => 'Successfully updated']]);
        }

        Cache::forget("locations");

        return redirect(route('locations.edit', $location))->with(['response' => ['type' => 'failure', 'message' => 'Updating failed']]);
    }

    public function destroy(Location $location)
    {
        try {
            $location->delete();
        } catch (\Exception $exception) {
            return redirect(route('locations.show', $location))->with(['response' => ['type' => 'failure', 'message' => 'Failed to delete: ' . $exception->getMessage()]]);
        }

        Cache::forget("locations");

        return redirect(route('locations.index'))->with(['response' => ['type' => 'success', 'message' => 'Successfully deleted']]);
    }

    public function geoApiCall(Request $request): \Illuminate\Http\JsonResponse
    {
        if (is_null($request->location)) {
            return response()->json(['message' => 'Please set the location parameter'], 400)->header('Content-Type', 'application/json');
        }
        return response()->json(Location::getGeoApiData($request->location))->header('Content-Type', 'application/json');
    }

}
