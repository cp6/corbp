<?php

namespace App\Http\Controllers;

use App\Models\Lens;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LensController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Lens/Index', [
            'lens' => Lens::Paginate(6)
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

    public function show(Lens $lens): \Inertia\Response
    {
        return Inertia::render('Lens/Show', [
            'lens' => $lens,
            'response' => \Session::get('response')
        ]);
    }

    public function edit(Lens $lens): \Inertia\Response
    {
        return Inertia::render('Lens/Edit', [
            'resource' => $lens,
            'response' => \Session::get('response')
        ]);
    }

    public function update(Request $request, Lens $lens)
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

        $response = $lens->update($request->all());

        if ($response) {
            return redirect(route('lens.edit', $lens))->with(['response' => ['type' => 'success', 'message' => 'Successfully updated']]);
        }

        return redirect(route('lens.edit', $lens))->with(['response' => ['type' => 'failure', 'message' => 'Updating failed']]);
    }

    public function destroy(Lens $lens)
    {
        try {
            $lens->delete();
        } catch (\Exception $exception) {
            return redirect(route('lens.show', $lens))->with(['response' => ['type' => 'failure', 'message' => 'Failed to delete: ' . $exception->getMessage()]]);
        }

        return redirect(route('lens.index'))->with(['response' => ['type' => 'success', 'message' => 'Successfully deleted']]);
    }
}
