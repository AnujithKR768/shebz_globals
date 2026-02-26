<?php

namespace App\Http\Controllers;

use App\Models\LearnMore;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class LearnMoreController extends Controller
{
    // ADMIN LIST PAGE
    public function index()
    {
        return Inertia::render("LearnMore/Index", [
            "items" => LearnMore::latest()->paginate(10),
        ]);
    }

    // ADMIN CREATE PAGE
    public function create()
    {
        return Inertia::render("LearnMore/Create");
    }

    // STORE
    public function store(Request $request)
    {
        $data = $request->validate([
            'top_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:10240',

            'hero_title' => 'nullable|string|max:255',
            'hero_paragraph1' => 'nullable|string',
            'hero_paragraph2' => 'nullable|string',

            'expertise_title' => 'nullable|string|max:255',
            'expertise_items' => 'nullable|array',
            'expertise_items.*' => 'nullable|string|max:255',

            'why_title' => 'nullable|string|max:255',
            'why_description' => 'nullable|string',

            'is_active' => 'nullable|boolean',
        ]);

        // FIXED Hostinger-safe upload
        if ($request->hasFile('top_image')) {

            $path = $request->file('top_image')->store('learn_more', 'public');

            // FORCE correct destination
            $destination = base_path('public_html/storage/' . $path);

            if (!is_dir(dirname($destination))) {
                mkdir(dirname($destination), 0755, true);
            }

            @copy(
                storage_path('app/public/' . $path),
                $destination
            );

            $data['top_image'] = $path;
        }

        // only one active
        if (!empty($data['is_active']) && $data['is_active'] == true) {
            LearnMore::where('is_active', true)->update(['is_active' => false]);
        }

        LearnMore::create($data);

        return redirect()
            ->route("learnmore.admin.index")
            ->with("success", "Learn More Created!");
    }

    // EDIT
    public function edit(LearnMore $learnMore)
    {
        return Inertia::render("LearnMore/Edit", [
            "item" => $learnMore,
        ]);
    }

    // UPDATE
    public function update(Request $request, LearnMore $learnMore)
    {
        $data = $request->validate([
            'top_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:10240',

            'hero_title' => 'nullable|string|max:255',
            'hero_paragraph1' => 'nullable|string',
            'hero_paragraph2' => 'nullable|string',

            'expertise_title' => 'nullable|string|max:255',
            'expertise_items' => 'nullable|array',
            'expertise_items.*' => 'nullable|string|max:255',

            'why_title' => 'nullable|string|max:255',
            'why_description' => 'nullable|string',

            'is_active' => 'nullable|boolean',
        ]);

        if ($request->hasFile('top_image')) {

            // delete old Laravel file
            if ($learnMore->top_image &&
                Storage::disk('public')->exists($learnMore->top_image)) {
                Storage::disk('public')->delete($learnMore->top_image);
            }

            // delete old public file
            $oldPublic = base_path('public_html/storage/' . $learnMore->top_image);
            if ($learnMore->top_image && file_exists($oldPublic)) {
                @unlink($oldPublic);
            }

            // store new
            $path = $request->file('top_image')->store('learn_more', 'public');

            // ⭐ FORCE correct destination
            $destination = base_path('public_html/storage/' . $path);

            if (!is_dir(dirname($destination))) {
                mkdir(dirname($destination), 0755, true);
            }

            @copy(
                storage_path('app/public/' . $path),
                $destination
            );

            $data['top_image'] = $path;

        } else {
            unset($data['top_image']);
        }

        // allow only one active record
        if (!empty($data['is_active']) && $data['is_active'] === true) {
            LearnMore::where('id', '!=', $learnMore->id)
                ->update(['is_active' => false]);
        }

        $learnMore->update($data);

        return redirect()
            ->route("learnmore.admin.index")
            ->with("success", "Updated Successfully!");
    }

    // DELETE
    public function destroy(LearnMore $learnMore)
    {
        // delete Laravel file
        if ($learnMore->top_image &&
            Storage::disk('public')->exists($learnMore->top_image)) {
            Storage::disk('public')->delete($learnMore->top_image);
        }

        // delete public file
        $publicFile = base_path('public_html/storage/' . $learnMore->top_image);
        if ($learnMore->top_image && file_exists($publicFile)) {
            @unlink($publicFile);
        }

        $learnMore->delete();

        return redirect()
            ->route("learnmore.admin.index")
            ->with("success", "Deleted Successfully!");
    }
}
