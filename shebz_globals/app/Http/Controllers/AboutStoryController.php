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
        ]);

        //Hostinger-safe upload
        if ($request->hasFile("image")) {

            // store in Laravel storage
            $path = $request->file("image")->store("about_story", "public");

            // ⭐ FORCE correct public_html path
            $destination = base_path("public_html/storage/" . $path);

            if (!is_dir(dirname($destination))) {
                mkdir(dirname($destination), 0755, true);
            }

            @copy(
                storage_path("app/public/" . $path),
                $destination
            );

            $data["image"] = $path;
        }

        // only 1 active
        if (!empty($data["is_active"]) && $data["is_active"] == true) {
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
        ]);

        $data["is_active"] = $request->boolean("is_active");

        if ($request->hasFile("image")) {

            // delete old Laravel file
            if ($aboutStory->image &&
                Storage::disk("public")->exists($aboutStory->image)) {
                Storage::disk("public")->delete($aboutStory->image);
            }

            // delete old public file
            $oldPublic = base_path("public_html/storage/" . $aboutStory->image);
            if ($aboutStory->image && file_exists($oldPublic)) {
                @unlink($oldPublic);
            }

            // store new
            $path = $request->file("image")->store("about_story", "public");

            // FORCE correct destination
            $destination = base_path("public_html/storage/" . $path);

            if (!is_dir(dirname($destination))) {
                mkdir(dirname($destination), 0755, true);
            }

            @copy(
                storage_path("app/public/" . $path),
                $destination
            );

            $data["image"] = $path;

        } else {
            unset($data["image"]);
        }

        // ensure only one active record
        if ($data["is_active"] === true) {
            AboutStory::where("id", "!=", $aboutStory->id)
                ->update(["is_active" => false]);
        }

        $aboutStory->update($data);

        return redirect()
            ->route("aboutstory.admin.index")
            ->with("success", "About Story Updated!");
    }

    public function destroy(AboutStory $aboutStory)
    {
        // delete Laravel file
        if ($aboutStory->image &&
            Storage::disk("public")->exists($aboutStory->image)) {
            Storage::disk("public")->delete($aboutStory->image);
        }

        // delete public file
        $publicFile = base_path("public_html/storage/" . $aboutStory->image);
        if ($aboutStory->image && file_exists($publicFile)) {
            @unlink($publicFile);
        }

        $aboutStory->delete();

        return redirect()
            ->route("aboutstory.admin.index")
            ->with("success", "About Story Deleted!");
    }
}
