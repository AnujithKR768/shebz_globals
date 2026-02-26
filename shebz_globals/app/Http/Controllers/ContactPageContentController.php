<?php

namespace App\Http\Controllers;

use App\Models\ContactPageContent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactPageContentController extends Controller
{
    // ✅ SHOW LIST PAGE (TABLE)
    public function index()
    {
        $contents = ContactPageContent::latest()->get();

        return Inertia::render('Contact/ContactUs/Index', [
            'contents' => $contents,
        ]);
    }

    // ✅ SHOW CREATE FORM PAGE
    public function create()
    {
        return Inertia::render('Contact/ContactUs/Create');
    }

    // ✅ SAVE NEW CONTENT
    public function store(Request $request)
    {
        $data = $request->validate([
            'page_title' => 'required|string|max:255',
            'page_description' => 'nullable|string',
            'map_embed_url' => 'nullable|string|max:1000',

            'email' => 'nullable|string|max:255',
            'website' => 'nullable|string|max:255',
            'head_office' => 'nullable|string|max:255',

            'right_title' => 'nullable|string|max:255',
            'right_description' => 'nullable|string',


            'whatsapp_number' => 'nullable|string|max:50',
            'whatsapp_text' => 'nullable|string|max:500',

            'linkedin_url' => 'nullable|string|max:1000',

            'why_title' => 'nullable|string|max:255',
            'why_description' => 'nullable|string',

            'why_points' => 'nullable|array',
            'why_points.*' => 'nullable|string|max:255',

            'is_active' => 'required|boolean',
        ]);

        // ✅ Only ONE active record allowed
        if ($data['is_active'] == true) {
            ContactPageContent::query()->update(['is_active' => false]);
        }

        ContactPageContent::create($data);

        return redirect()->route('contact-content.index')
            ->with('success', 'Contact page content created successfully!');
    }

    // ✅ SHOW EDIT FORM PAGE
    public function edit(ContactPageContent $contactContent)
    {
        return Inertia::render('Contact/ContactUs/Edit', [
            'content' => $contactContent,
        ]);
    }

    // ✅ UPDATE CONTENT
    public function update(Request $request, ContactPageContent $contactContent)
    {
        $data = $request->validate([
            'page_title' => 'required|string|max:255',
            'page_description' => 'nullable|string',
            'map_embed_url' => 'nullable|string|max:1000',

            'email' => 'nullable|string|max:255',
            'website' => 'nullable|string|max:255',
            'head_office' => 'nullable|string|max:255',

            'right_title' => 'nullable|string|max:255',
            'right_description' => 'nullable|string',


            'whatsapp_number' => 'nullable|string|max:50',
            'whatsapp_text' => 'nullable|string|max:500',

            'linkedin_url' => 'nullable|string|max:1000',

            'why_title' => 'nullable|string|max:255',
            'why_description' => 'nullable|string',

            'why_points' => 'nullable|array',
            'why_points.*' => 'nullable|string|max:255',

            'is_active' => 'required|boolean',
        ]);

        // ✅ Only ONE active record allowed
        if ($data['is_active'] == true) {
            ContactPageContent::where('id', '!=', $contactContent->id)
                ->update(['is_active' => false]);
        }

        $contactContent->update($data);

        return redirect()->route('contact-content.index')
            ->with('success', 'Contact page content updated successfully!');
    }

    // ✅ DELETE CONTENT
    public function destroy(ContactPageContent $contactContent)
    {
        $contactContent->delete();

        return redirect()->route('contact-content.index')
            ->with('success', 'Contact page content deleted successfully!');
    }
}
