<?php

namespace App\Http\Controllers;

use App\Models\AboutStory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AboutStoryController extends Controller
{
    public function index()
    {
        return Inertia::render("About/AboutStory/Index", [
            "items" => AboutStory::latest()->paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render("About/AboutStory/Create");
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "heading" => "required|string|max:255",
            "title" => "required|string|max:255",
            "paragraph1" => "nullable|string",
            "paragraph2" => "nullable|string",
            "image" => "nullable|image|mimes:jpg,jpeg,png,webp|max:10240",
            "is_active" => "nullable|boolean",
            "meta_title" => "nullable|string|max:255",
            "meta_description" => "nullable|string|max:255"
        ]);

        // Upload image
        if ($request->hasFile("image")) {
            $data["image"] = $request->file("image")->store("about_story", "public");
        }

        // Only one active record
        if (!empty($data["is_active"])) {
            AboutStory::where("is_active", true)->update(["is_active" => false]);
        }

        AboutStory::create($data);

        return redirect()
            ->route("aboutstory.admin.index")
            ->with("success", "About Story Added!");
    }

    public function edit(AboutStory $aboutStory)
    {
        return Inertia::render("About/AboutStory/Edit", [
            "item" => $aboutStory,
        ]);
    }

    public function update(Request $request, AboutStory $aboutStory)
{
    $data = $request->validate([
        "heading" => "required|string|max:255",
        "title" => "required|string|max:255",
        "paragraph1" => "nullable|string",
        "paragraph2" => "nullable|string",
        "image" => "nullable|image|mimes:jpg,jpeg,png,webp|max:10240",
        "is_active" => "nullable|boolean",
        "meta_title" => "nullable|string|max:255",
        "meta_description" => "nullable|string|max:255",
    ]);

    // Convert checkbox value to boolean
    $data["is_active"] = $request->boolean("is_active");


    /*
    Image
    */
    if ($request->hasFile("image")) {

        // Delete old image
        if (
            $aboutStory->image &&
            Storage::disk("public")->exists($aboutStory->image)
        ) {
            Storage::disk("public")->delete($aboutStory->image);
        }

        // Store new image
        $data["image"] = $request
            ->file("image")
            ->store("about_story", "public");

    } else {

        // No new image selected.
        // Remove image from update data so the old image remains unchanged.
        unset($data["image"]);
    }


    /*
    ONLY ONE ACTIVE RECORD
    */
    if ($data["is_active"]) {

        AboutStory::where("id", "!=", $aboutStory->id)
            ->update([
                "is_active" => false
            ]);
    }


    /*
    UPDATE
    */

    $aboutStory->update($data);


    return redirect()
        ->route("aboutstory.admin.index")
        ->with("success", "About Story Updated!");
}

    public function destroy(AboutStory $aboutStory)
    {
        // Delete image
        if ($aboutStory->image && Storage::disk("public")->exists($aboutStory->image)) {
            Storage::disk("public")->delete($aboutStory->image);
        }

        $aboutStory->delete();

        return redirect()
            ->route("aboutstory.admin.index")
            ->with("success", "About Story Deleted!");
    }
}
