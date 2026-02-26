<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CoachingMentorship;
use App\Models\CoachingProgram;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CoachingProgramAdminController extends Controller
{
    public function index()
    {
        return Inertia::render("Solutions/CoachingPrograms/Index", [
            "items" => CoachingProgram::with("coachingMentorship")
                ->orderBy("position")
                ->paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render("Solutions/CoachingPrograms/Create", [
            "coachingList" => CoachingMentorship::orderBy("id")->get(["id", "title"]),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "coaching_mentorship_id" => "required|exists:coaching_mentorships,id",
            "text" => "required|string|max:255",
            "position" => "nullable|integer",
            "is_active" => "nullable|boolean",
        ]);

        CoachingProgram::create($data);

        return redirect()->route("coachingprogram.admin.index")->with("success", "Program Added!");
    }

    public function edit(CoachingProgram $coachingProgram)
    {
        return Inertia::render("Solutions/CoachingPrograms/Edit", [
            "item" => $coachingProgram,
            "coachingList" => CoachingMentorship::orderBy("id")->get(["id", "title"]),
        ]);
    }

    public function update(Request $request, CoachingProgram $coachingProgram)
    {
        $data = $request->validate([
            "coaching_mentorship_id" => "required|exists:coaching_mentorships,id",
            "text" => "required|string|max:255",
            "position" => "nullable|integer",
            "is_active" => "nullable|boolean",
        ]);

        $coachingProgram->update($data);

        return redirect()->route("coachingprogram.admin.index")->with("success", "Program Updated!");
    }

    public function destroy(CoachingProgram $coachingProgram)
    {
        $coachingProgram->delete();
        return redirect()->route("coachingprogram.admin.index")->with("success", "Program Deleted!");
    }
}
