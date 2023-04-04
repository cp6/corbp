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

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Lense $lense): \Inertia\Response
    {
        return Inertia::render('Lenses/Show', [
            'lense' => $lense,
            'response' => \Session::get('response')
        ]);
    }

    public function edit(Lense $lense)
    {
        //
    }

    public function update(Request $request, Lense $lense)
    {
        //
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
