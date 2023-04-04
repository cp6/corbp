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
            'devices' => Device::Paginate(2)
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Device $device)
    {
        //
    }

    public function edit(Device $device)
    {
        //
    }

    public function update(Request $request, Device $device)
    {
        //
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
