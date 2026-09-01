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
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
        ]);

        if ($request->hasFile('background_image')) {
            $data['background_image'] = $request->file('background_image')->store('home_headers', 'public');
        }

        $data['is_active'] = $request->boolean('is_active');

        HomeHeader::create($data);

        return redirect()
            ->route('home.header')
            ->with('success', 'Header created successfully!');
    }

    public function edit(HomeHeader $homeHeader)
    {
        return Inertia::render('Home/HeaderEdit', [
            'item' => $homeHeader,
        ]);
    }

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
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
        ]);

        $data['is_active'] = $request->boolean('is_active');

        if ($request->hasFile('background_image')) {

            if ($homeHeader->background_image &&
                Storage::disk('public')->exists($homeHeader->background_image)) {

                Storage::disk('public')->delete($homeHeader->background_image);
            }

            $data['background_image'] = $request->file('background_image')->store('home_headers', 'public');

        } else {
            unset($data['background_image']);
        }

        $homeHeader->update($data);

        return redirect()
            ->route('home.header')
            ->with('success', 'Header updated successfully!');
    }

    public function destroy(HomeHeader $homeHeader)
    {
        if ($homeHeader->background_image &&
            Storage::disk('public')->exists($homeHeader->background_image)) {

            Storage::disk('public')->delete($homeHeader->background_image);
        }

        $homeHeader->delete();

        return redirect()
            ->route('home.header')
            ->with('success', 'Header deleted successfully!');
    }
}
