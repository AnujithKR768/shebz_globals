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

        // ✅ HOSTINGER-SAFE UPLOAD
        if ($request->hasFile('image')) {

            $path = $request->file('image')->store('testimonials', 'public');

            // ⭐ FORCE public_html
            $destination = base_path('public_html/storage/' . $path);

            if (!is_dir(dirname($destination))) {
                mkdir(dirname($destination), 0755, true);
            }

            @copy(
                storage_path('app/public/' . $path),
                $destination
            );

            $data['image'] = $path;
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

        // delete Laravel file
        if (
            $testimonial->image &&
            Storage::disk('public')->exists($testimonial->image)
        ) {
            Storage::disk('public')->delete($testimonial->image);
        }

        // delete public_html file
        $publicFile = base_path('public_html/storage/' . $testimonial->image);
        if ($testimonial->image && file_exists($publicFile)) {
            @unlink($publicFile);
        }

        $testimonial->delete();

        return redirect()->back();
    }
}
