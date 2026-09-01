<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Solution;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class SolutionAdminController extends Controller
{
    public function index()
    {
        return Inertia::render("Solutions/OurSolutions/Index", [
            "items" => Solution::orderBy("position")->paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render("Solutions/OurSolutions/Create");
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "title" => "required|string|max:255",
            "description" => "nullable|string",
            "image" => 'nullable|image|mimes:png,jpg,jpeg,svg,webp|max:40960',
            "position" => "nullable|integer",
            "is_active" => "nullable|boolean",
            "meta_title" => "nullable|string|max:255",
            "meta_description" => "nullable|string|max:255"
        ]);

        if ($request->hasFile("image")) {
            $data["image"] = $request->file("image")->store("solutions", "public");
        }

        $data["is_active"] = $request->boolean("is_active");

        Solution::create($data);

        return redirect()
            ->route("solutions.admin.index")
            ->with("success", "Solution Created!");
    }

    public function edit(Solution $solution)
    {
        return Inertia::render("Solutions/OurSolutions/Edit", [
            "item" => $solution,
        ]);
    }

    public function update(Request $request, Solution $solution)
    {
        $data = $request->validate([
            "title" => "required|string|max:255",
            "description" => "nullable|string",
            "image" => 'nullable|image|mimes:png,jpg,jpeg,svg,webp|max:40960',
            "is_active" => "nullable|boolean",
            "position" => "nullable|integer",
            "meta_title" => "nullable|string|max:255",
            "meta_description" => "nullable|string|max:255"
        ]);

        $data["is_active"] = $request->boolean("is_active");

        if ($request->hasFile("image")) {

            if (
                $solution->image &&
                Storage::disk('public')->exists($solution->image)
            ) {
                Storage::disk('public')->delete($solution->image);
            }

            $data["image"] = $request->file("image")->store("solutions", "public");

        } else {
            unset($data["image"]);
        }

        $solution->update($data);

        return redirect()
            ->route("solutions.admin.index")
            ->with("success", "Solution Updated!");
    }

    public function destroy(Solution $solution)
    {
        if (
            $solution->image &&
            Storage::disk('public')->exists($solution->image)
        ) {
            Storage::disk('public')->delete($solution->image);
        }

        $solution->delete();

        return redirect()
            ->route("solutions.admin.index")
            ->with("success", "Solution Deleted!");
    }
}
