<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CoachingMentorship;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class CoachingMentorshipAdminController extends Controller
{
    public function index()
    {
        return Inertia::render("Solutions/Coaching/Index", [
            "items" => CoachingMentorship::latest()->paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render("Solutions/Coaching/Create");
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "title" => "required|string|max:255",
            "subtitle" => "nullable|string|max:255",
            "image" => "nullable|image|mimes:png,jpg,jpeg,svg|max:40960",
            "is_active" => "nullable|boolean",
        ]);

        // HOSTINGER-SAFE UPLOAD
        if ($request->hasFile("image")) {

            // store in Laravel
            $path = $request->file("image")->store("coaching", "public");

            // FORCE correct public_html path
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

        // only one active
        if (!empty($data["is_active"])) {
            CoachingMentorship::where("is_active", true)
                ->update(["is_active" => false]);
        }

        CoachingMentorship::create($data);

        return redirect()
            ->route("coaching.admin.index")
            ->with("success", "Coaching & Mentorship Created!");
    }

    public function edit(CoachingMentorship $coachingMentorship)
    {
        return Inertia::render("Solutions/Coaching/Edit", [
            "item" => $coachingMentorship,
        ]);
    }

    public function update(Request $request, CoachingMentorship $coachingMentorship)
    {
        $data = $request->validate([
            "title" => "required|string|max:255",
            "subtitle" => "nullable|string|max:255",
            "image" => "nullable|image|mimes:png,jpg,jpeg,svg|max:40960",
            "is_active" => "required|boolean",
        ]);

        if ($request->hasFile("image")) {

            // delete Laravel file
            if ($coachingMentorship->image &&
                Storage::disk("public")->exists($coachingMentorship->image)) {
                Storage::disk("public")->delete($coachingMentorship->image);
            }

            // delete public file
            $oldPublic = base_path("public_html/storage/" . $coachingMentorship->image);
            if ($coachingMentorship->image && file_exists($oldPublic)) {
                @unlink($oldPublic);
            }

            // store new
            $path = $request->file("image")->store("coaching", "public");

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

        // only one active
        if ($data["is_active"]) {
            CoachingMentorship::where("id", "!=", $coachingMentorship->id)
                ->update(["is_active" => false]);
        }

        $coachingMentorship->update($data);

        return redirect()
            ->route("coaching.admin.index")
            ->with("success", "Coaching & Mentorship Updated!");
    }

    public function destroy(CoachingMentorship $coachingMentorship)
    {
        // delete Laravel file
        if ($coachingMentorship->image &&
            Storage::disk("public")->exists($coachingMentorship->image)) {
            Storage::disk("public")->delete($coachingMentorship->image);
        }

        // delete public file
        $publicFile = base_path("public_html/storage/" . $coachingMentorship->image);
        if ($coachingMentorship->image && file_exists($publicFile)) {
            @unlink($publicFile);
        }

        $coachingMentorship->delete();

        return redirect()
            ->route("coaching.admin.index")
            ->with("success", "Coaching & Mentorship Deleted!");
    }
}
