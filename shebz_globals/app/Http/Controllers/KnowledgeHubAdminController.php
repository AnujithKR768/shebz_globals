<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\KnowledgeHub;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class KnowledgeHubAdminController extends Controller
{
    public function index()
    {
        return Inertia::render("Solutions/KnowledgeHub/Index", [
            "items" => KnowledgeHub::latest()->paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render("Solutions/KnowledgeHub/Create");
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "title" => "required|string|max:255",
            "subtitle" => "nullable|string|max:255",
            "box_title" => "nullable|string|max:255",
            "image" => 'nullable|image|mimes:png,jpg,jpeg,svg,webp|max:40960',
            "is_active" => "nullable|boolean",
        ]);

        if ($request->hasFile("image")) {
            $data["image"] = $request->file("image")->store("knowledgehub", "public");
        }

        $data["is_active"] = $request->boolean("is_active");

        // only one active
        if ($data["is_active"]) {
            KnowledgeHub::where("is_active", true)
                ->update(["is_active" => false]);
        }

        KnowledgeHub::create($data);

        return redirect()
            ->route("knowledgehub.admin.index")
            ->with("success", "Knowledge Hub Created!");
    }

    public function edit(KnowledgeHub $knowledgeHub)
    {
        return Inertia::render("Solutions/KnowledgeHub/Edit", [
            "item" => $knowledgeHub,
        ]);
    }

    public function update(Request $request, KnowledgeHub $knowledgeHub)
    {
        $data = $request->validate([
            "title" => "required|string|max:255",
            "subtitle" => "nullable|string|max:255",
            "box_title" => "nullable|string|max:255",
            "image" => 'nullable|image|mimes:png,jpg,jpeg,svg,webp|max:40960',
            "is_active" => "nullable|boolean",
        ]);

        $data["is_active"] = $request->boolean("is_active");

        if ($request->hasFile("image")) {

            if (
                $knowledgeHub->image &&
                Storage::disk("public")->exists($knowledgeHub->image)
            ) {
                Storage::disk("public")->delete($knowledgeHub->image);
            }

            $data["image"] = $request->file("image")->store("knowledgehub", "public");

        } else {
            unset($data["image"]);
        }

        // only one active record
        if ($data["is_active"]) {
            KnowledgeHub::where("id", "!=", $knowledgeHub->id)
                ->update(["is_active" => false]);
        }

        $knowledgeHub->update($data);

        return redirect()
            ->route("knowledgehub.admin.index")
            ->with("success", "Knowledge Hub Updated!");
    }

    public function destroy(KnowledgeHub $knowledgeHub)
    {
        if (
            $knowledgeHub->image &&
            Storage::disk("public")->exists($knowledgeHub->image)
        ) {
            Storage::disk("public")->delete($knowledgeHub->image);
        }

        $knowledgeHub->delete();

        return redirect()
            ->route("knowledgehub.admin.index")
            ->with("success", "Knowledge Hub Deleted!");
    }
}
