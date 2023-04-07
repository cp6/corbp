<?php

namespace App\Http\Controllers;

use App\Models\SubLocation;
use Illuminate\Http\Request;

class SubLocationController extends Controller
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

    public function show(SubLocation $subLocation)
    {
        //
    }

    public function edit(SubLocation $subLocation)
    {
        //
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
