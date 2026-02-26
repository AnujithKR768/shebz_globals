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
            "image" => "nullable|image|mimes:png,jpg,jpeg,svg|max:40960",
            "position" => "nullable|integer",
            "is_active" => "nullable|boolean",
        ]);

        // ✅ HOSTINGER-SAFE UPLOAD
        if ($request->hasFile("image")) {

            $path = $request->file("image")->store("solutions", "public");

            // ⭐ FORCE public_html
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
            "image" => "nullable|image|mimes:png,jpg,jpeg,svg|max:40960",
            "is_active" => "nullable|boolean",
        ]);

        if ($request->hasFile("image")) {

            // delete Laravel file
            if (
                $solution->image &&
                Storage::disk('public')->exists($solution->image)
            ) {
                Storage::disk('public')->delete($solution->image);
            }

            // delete public_html file
            $oldPublic = base_path("public_html/storage/" . $solution->image);
            if ($solution->image && file_exists($oldPublic)) {
                @unlink($oldPublic);
            }

            // store new
            $path = $request->file("image")->store("solutions", "public");

            // ⭐ FORCE public_html
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

        $solution->update($data);

        return redirect()
            ->route("solutions.admin.index")
            ->with("success", "Solution Updated!");
    }

    public function destroy(Solution $solution)
    {
        // delete Laravel file
        if (
            $solution->image &&
            Storage::disk('public')->exists($solution->image)
        ) {
            Storage::disk('public')->delete($solution->image);
        }

        // delete public_html file
        $publicFile = base_path("public_html/storage/" . $solution->image);
        if ($solution->image && file_exists($publicFile)) {
            @unlink($publicFile);
        }

        $solution->delete();

        return redirect()
            ->route("solutions.admin.index")
            ->with("success", "Solution Deleted!");
    }
}
