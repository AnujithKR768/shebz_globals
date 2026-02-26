<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HomeHeader;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class HomeHeaderController extends Controller
{
    public function HomeHeader()
    {
        return Inertia::render('Home/HeaderList', [
            'items' => HomeHeader::latest()->paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render('Home/HeaderCreate');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'background_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:10240',
            'hero_title' => 'required|string|max:255',
            'hero_paragraph1' => 'nullable|string',
            'hero_paragraph2' => 'nullable|string',
            'button_text' => 'nullable|string|max:50',
            'button_link' => 'nullable|string|max:255',
            'banner_text' => 'nullable|string|max:255',
            'is_active' => 'nullable|boolean',
        ]);

        // HOSTINGER-SAFE UPLOAD
        if ($request->hasFile('background_image')) {

            $path = $request->file('background_image')->store('home_headers', 'public');

            // FORCE public_html path
            $destination = base_path('public_html/storage/' . $path);

            if (!is_dir(dirname($destination))) {
                mkdir(dirname($destination), 0755, true);
            }

            @copy(
                storage_path('app/public/' . $path),
                $destination
            );

            $data['background_image'] = $path;
        }

        HomeHeader::create($data);

        return redirect()
            ->route('home.header')
            ->with('success', 'Header created successfully!');
    }

    // Edit
    public function edit(HomeHeader $homeHeader)
    {
        return Inertia::render('Home/HeaderEdit', [
            'item' => $homeHeader,
        ]);
    }

    // UPDATE
    public function update(Request $request, HomeHeader $homeHeader)
    {
        $data = $request->validate([
            'background_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:10240',
            'hero_title' => 'required|string|max:255',
            'hero_paragraph1' => 'nullable|string',
            'hero_paragraph2' => 'nullable|string',
            'button_text' => 'nullable|string|max:50',
            'button_link' => 'nullable|string|max:255',
            'banner_text' => 'nullable|string|max:255',
            'is_active' => 'nullable|boolean',
        ]);

        if ($request->hasFile('background_image')) {

            // delete Laravel file
            if (
                $homeHeader->background_image &&
                Storage::disk('public')->exists($homeHeader->background_image)
            ) {
                Storage::disk('public')->delete($homeHeader->background_image);
            }

            // delete public_html file
            $oldPublic = base_path('public_html/storage/' . $homeHeader->background_image);
            if ($homeHeader->background_image && file_exists($oldPublic)) {
                @unlink($oldPublic);
            }

            // store new
            $path = $request->file('background_image')->store('home_headers', 'public');

            // ⭐ FORCE public_html
            $destination = base_path('public_html/storage/' . $path);

            if (!is_dir(dirname($destination))) {
                mkdir(dirname($destination), 0755, true);
            }

            @copy(
                storage_path('app/public/' . $path),
                $destination
            );

            $data['background_image'] = $path;

        } else {
            unset($data['background_image']);
        }

        $homeHeader->update($data);

        return redirect()
            ->route('home.header')
            ->with('success', 'Header updated successfully!');
    }

    // DELETE
    public function destroy(HomeHeader $homeHeader)
    {
        // delete Laravel file
        if (
            $homeHeader->background_image &&
            Storage::disk('public')->exists($homeHeader->background_image)
        ) {
            Storage::disk('public')->delete($homeHeader->background_image);
        }

        // delete public_html file
        $publicFile = base_path('public_html/storage/' . $homeHeader->background_image);
        if ($homeHeader->background_image && file_exists($publicFile)) {
            @unlink($publicFile);
        }

        $homeHeader->delete();

        return redirect()
            ->route('home.header')
            ->with('success', 'Header deleted successfully!');
    }
}
