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
            "image" => 'nullable|image|mimes:png,jpg,jpeg,svg,webp|max:40960',
            "is_active" => "nullable|boolean",
        ]);

        // Normal Laravel upload
        if ($request->hasFile("image")) {
            $data["image"] = $request->file("image")->store("coaching", "public");
        }

        // Only one active
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
            "image" => 'nullable|image|mimes:png,jpg,jpeg,svg,webp|max:40960',
            "is_active" => "required|boolean",
        ]);

        // Replace image if new uploaded
        if ($request->hasFile("image")) {

            if ($coachingMentorship->image &&
                Storage::disk("public")->exists($coachingMentorship->image)) {

                Storage::disk("public")->delete($coachingMentorship->image);
            }

            $data["image"] = $request->file("image")->store("coaching", "public");

        } else {
            unset($data["image"]);
        }

        // Only one active
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
        // Delete image
        if ($coachingMentorship->image &&
            Storage::disk("public")->exists($coachingMentorship->image)) {

            Storage::disk("public")->delete($coachingMentorship->image);
        }

        $coachingMentorship->delete();

        return redirect()
            ->route("coaching.admin.index")
            ->with("success", "Coaching & Mentorship Deleted!");
    }
}
