<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Testimonial;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    public function create()
    {
        return Inertia::render('Home/Testimonial/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'designation' => 'nullable|string|max:255',
            'message' => 'required|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:10240',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('testimonials', 'public');
        }

        Testimonial::create($data);

        return redirect()->route('home');
    }

    public function index()
    {
        $testimonials = Testimonial::latest()->get();

        return Inertia::render('Home/Testimonial/Index', [
            'testimonials' => $testimonials
        ]);
    }

    public function destroy($id)
    {
        $testimonial = Testimonial::findOrFail($id);

        if (
            $testimonial->image &&
            Storage::disk('public')->exists($testimonial->image)
        ) {
            Storage::disk('public')->delete($testimonial->image);
        }

        $testimonial->delete();

        return redirect()->back();
    }
}
