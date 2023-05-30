<?php

namespace App\Http\Controllers;

use App\Models\Device;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DeviceController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Devices/Index', [
            'devices' => Device::Paginate(8)
        ]);
    }

    public function create(): void
    {
        abort(404);
    }

    public function store(Request $request): void
    {
        abort(404);
    }

    public function show(Device $device): \Inertia\Response
    {
        return Inertia::render('Devices/Show', [
            'device' => $device,
            'response' => \Session::get('response'),
        ]);
    }

    public function edit(Device $device): \Inertia\Response
    {
        return Inertia::render('Devices/Edit', [
            'resource' => $device,
            'response' => \Session::get('response')
        ]);
    }

    public function update(Request $request, Device $device)
    {
        $request->validate([
            'name' => 'string|required|max:125',
            'slug' => 'string|required|max:64',
            'short_name' => 'string|required|max:64',
            'brand' => 'string|sometimes|nullable|max:125',
            'model' => 'string|sometimes|nullable|max:125'
        ]);

        $response = $device->update($request->all());

        if ($response) {
            return redirect(route('device.edit', $device))->with(['response' => ['type' => 'success', 'message' => 'Successfully updated']]);
        }

        return redirect(route('device.edit', $device))->with(['response' => ['type' => 'failure', 'message' => 'Updating failed']]);
    }

    public function destroy(Device $device)
    {
        try {
            $device->delete();
        } catch (\Exception $exception) {
            return redirect(route('device.show', $device))->with(['response' => ['type' => 'failure', 'message' => 'Failed to delete: ' . $exception->getMessage()]]);
        }

        return redirect(route('device.index'))->with(['response' => ['type' => 'success', 'message' => 'Successfully deleted']]);
    }
}
