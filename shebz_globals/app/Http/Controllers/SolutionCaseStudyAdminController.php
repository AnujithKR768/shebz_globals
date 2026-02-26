<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\SolutionCaseStudy;
use Inertia\Inertia;

class SolutionCaseStudyAdminController extends Controller
{
    public function index()
    {
        return Inertia::render("Solutions/CaseStudies/Index", [
            "items" => SolutionCaseStudy::orderBy("position")->paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render("Solutions/CaseStudies/Create");
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "text" => "required|string|max:500",
            "position" => "nullable|integer",
            "is_active" => "nullable|boolean",
        ]);

        SolutionCaseStudy::create($data);

        return redirect()->route("casestudy.admin.index")->with("success", "Case Study Added!");
    }

    public function edit(SolutionCaseStudy $solutionCaseStudy)
    {
        return Inertia::render("Solutions/CaseStudies/Edit", [
            "item" => $solutionCaseStudy,
        ]);
    }

    public function update(Request $request, SolutionCaseStudy $solutionCaseStudy)
    {
        $data = $request->validate([
            "text" => "required|string|max:500",
            "position" => "nullable|integer",
            "is_active" => "nullable|boolean",
        ]);

        $solutionCaseStudy->update($data);

        return redirect()->route("casestudy.admin.index")->with("success", "Case Study Updated!");
    }

    public function destroy(SolutionCaseStudy $solutionCaseStudy)
    {
        $solutionCaseStudy->delete();
        return redirect()->route("casestudy.admin.index")->with("success", "Case Study Deleted!");
    }
}
