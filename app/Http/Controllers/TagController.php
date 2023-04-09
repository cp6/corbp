<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TagController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Tags/Index', [
            'tags' => Tag::get()
        ]);
    }

    public function create(): \Inertia\Response
    {
        return Inertia::render('Tag/Create', [

        ]);
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Tag $tag): \Inertia\Response
    {
        return Inertia::render('Tag/Show', [
            'resource' => $tag
        ]);
    }

    public function edit(Tag $tag): \Inertia\Response
    {
        return Inertia::render('Tag/Edit', [

        ]);
    }

    public function update(Request $request, Tag $tag)
    {
        //
    }

    public function destroy(Tag $tag)
    {
        try {
            $tag->delete();
        } catch (\Exception $exception) {
            return redirect(route('tag.show', $tag))->with(['response' => ['type' => 'failure', 'message' => 'Failed to delete: ' . $exception->getMessage()]]);
        }

        return redirect(route('tag.index'))->with(['response' => ['type' => 'success', 'message' => 'Successfully deleted']]);
    }
}
