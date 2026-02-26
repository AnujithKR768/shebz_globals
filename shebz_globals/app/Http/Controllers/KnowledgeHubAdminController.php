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
            "image" => "nullable|image|mimes:png,jpg,jpeg,svg|max:40960",
            "is_active" => "nullable|boolean",
        ]);

        // ✅ HOSTINGER-SAFE UPLOAD
        if ($request->hasFile("image")) {

            $path = $request->file("image")->store("knowledgehub", "public");

            // ⭐ FORCE public_html path
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
            "image" => "nullable|image|mimes:png,jpg,jpeg,svg|max:40960",
            "is_active" => "nullable|boolean",
        ]);

        if ($request->hasFile("image")) {

            // delete Laravel file
            if (
                $knowledgeHub->image &&
                Storage::disk("public")->exists($knowledgeHub->image)
            ) {
                Storage::disk("public")->delete($knowledgeHub->image);
            }

            // delete public_html file
            $oldPublic = base_path("public_html/storage/" . $knowledgeHub->image);
            if ($knowledgeHub->image && file_exists($oldPublic)) {
                @unlink($oldPublic);
            }

            // store new
            $path = $request->file("image")->store("knowledgehub", "public");

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

        // only one active record
        if (!empty($data["is_active"])) {
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
        // delete Laravel file
        if (
            $knowledgeHub->image &&
            Storage::disk("public")->exists($knowledgeHub->image)
        ) {
            Storage::disk("public")->delete($knowledgeHub->image);
        }

        // delete public_html file
        $publicFile = base_path("public_html/storage/" . $knowledgeHub->image);
        if ($knowledgeHub->image && file_exists($publicFile)) {
            @unlink($publicFile);
        }

        $knowledgeHub->delete();

        return redirect()
            ->route("knowledgehub.admin.index")
            ->with("success", "Knowledge Hub Deleted!");
    }
}
