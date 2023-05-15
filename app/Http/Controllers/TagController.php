<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TagController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Tag/Index', [
            'tags' => Tag::get()
        ]);
    }

    public function create(): \Inertia\Response
    {
        return Inertia::render('Tag/Create', [
            'response' => \Session::get('response')
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'string|required|max:32',
        ]);

        try {

            $tag = new Tag();
            $tag->name = $request->name;
            $tag->slug = strtolower(trim(str_replace(" ", "-", preg_replace("/[^a-zA-Z ]+/", "", $request->name))));
            $tag->save();

        } catch (\Exception $exception) {

            return redirect(route('tag.create'))->with(['response' => ['type' => 'failure', 'message' => 'Could not be created: ' . $exception->getMessage()]]);
        }

        return redirect(route('tag.create'))->with(['response' => ['type' => 'success', 'message' => 'Successfully created']]);
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
