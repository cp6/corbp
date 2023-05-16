<?php

namespace App\Http\Controllers;

use App\Models\Lense;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LenseController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Lenses/Index', [
            'lenses' => Lense::Paginate(2)
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

    public function show(Lense $lense): \Inertia\Response
    {
        return Inertia::render('Lenses/Show', [
            'lense' => $lense,
            'response' => \Session::get('response')
        ]);
    }

    public function edit(Lense $lense): \Inertia\Response
    {
        return Inertia::render('Lenses/Edit', [
            'resource' => $lense,
            'response' => \Session::get('response')
        ]);
    }

    public function update(Request $request, Lense $lense)
    {
        $request->validate([
            'name' => 'string|required|max:125',
            'slug' => 'string|required|max:64',
            'short_name' => 'string|required|max:64',
            'brand' => 'string|sometimes|nullable|max:125',
            'model' => 'string|sometimes|nullable|max:125',
            'min_mm' => 'integer|sometimes|nullable|max:999|min:1',
            'max_mm' => 'integer|sometimes|nullable|max:999|min:1',
            'min_aperture' => 'numeric|sometimes|nullable|max:999|min:1',
            'max_aperture' => 'numeric|sometimes|nullable|max:999|min:1'
        ]);

        $response = $lense->update($request->all());

        if ($response) {
            return redirect(route('lense.edit', $lense))->with(['response' => ['type' => 'success', 'message' => 'Successfully updated']]);
        }

        return redirect(route('lense.edit', $lense))->with(['response' => ['type' => 'failure', 'message' => 'Updating failed']]);
    }

    public function destroy(Lense $lense)
    {
        try {
            $lense->delete();
        } catch (\Exception $exception) {
            return redirect(route('lense.show', $lense))->with(['response' => ['type' => 'failure', 'message' => 'Failed to delete: ' . $exception->getMessage()]]);
        }

        return redirect(route('lense.index'))->with(['response' => ['type' => 'success', 'message' => 'Successfully deleted']]);
    }
}
