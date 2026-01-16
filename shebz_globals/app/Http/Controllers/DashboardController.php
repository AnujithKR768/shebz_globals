<?php

namespace App\Http\Controllers;

use App\Models\OurService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', ['user' => Auth::user()]);
    }
    public function service()
    {
        $services = OurService::latest()->paginate(3); // 3 or 4 per page

        return Inertia::render('Service/Service', [
            'services' => $services
        ]);
    }

  public function store(Request $request)
    {
        $validated = $request->validate([
            'icon'        => 'required|image|max:40960', // 40MB
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        // store image
        $validated['icon'] = $request->file('icon')->store('services', 'public');

        OurService::create($validated);

        return redirect()
            ->route('service')
            ->with('success', 'Service added successfully');
    }
    // public function navbar()
    // {
    //     return Inertia::render('Navbar/Navbar', []);

    // }
    // public function footer()
    // {
    //     return Inertia::render('Footer/Footer', []);
    // }

    // public function footerView()
    //     {
    //         return Inertia::render('Footer/Footer', []);
    //     }
    public function ServiceUpdate($id)
        {
            $service = OurService::findOrFail($id);

            return Inertia::render('Service/ServiceEdit', [
                'service' => $service
            ]);
        }
    public function update(Request $request, $id)
    {
        $service = OurService::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'nullable|image|mimes:png,jpg,jpeg,svg|max:2048',
        ]);

        /**
         * 🔴 CRITICAL FIX
         * Only update icon if a new file is uploaded
         */
        if ($request->hasFile('icon')) {
            $validated['icon'] = $request->file('icon')->store('services', 'public');
        } else {
            unset($validated['icon']); // ✅ prevents icon = NULL
        }

        $service->update($validated);

        return redirect()
            ->route('service')
            ->with('success', 'Service updated successfully!');
    }

    public function destroy($id)
        {
            $service = OurService::findOrFail($id);

            if ($service->icon && Storage::disk('public')->exists($service->icon)) {
                Storage::disk('public')->delete($service->icon);
            }

            $service->delete();

            return redirect()->route('service');
        }


}
