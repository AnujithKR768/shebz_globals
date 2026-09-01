<?php

namespace App\Http\Controllers;

use App\Models\OurService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\QuoteRequest;
use App\Models\ContactList;
use App\Models\User;
use App\Models\MissionVision;
use App\Models\Blog;

class DashboardController extends Controller
{

    /* =====================================================
     * SERVICES
     * ===================================================== */

    public function service()
    {
        return Inertia::render('Service/ServiceTable', [
            'services' => OurService::orderBy('id')->paginate(10)
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'icon'        => 'required|image|max:40960',
            'title'       => 'required|string|max:255',
            'category'    => 'required|in:Website,SEO,Consultation,Socialmedia',
            'description' => 'required|string',
            'meta_title' => 'nullable|string|max:1024',
            'meta_description' => 'nullable|string|max:1024',
        ]);

        if ($request->hasFile('icon')) {
            $validated['icon'] = $request->file('icon')->store('services', 'public');
        }

        OurService::create($validated);

        return redirect()->route('service')
            ->with('success', 'Service added successfully');
    }

    public function ServiceUpdate($id)
    {
        return Inertia::render('Service/ServiceEdit', [
            'service' => OurService::findOrFail($id)
        ]);
    }

    public function update(Request $request, $id)
    {
        $service = OurService::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|in:Website,SEO,Consultation,Socialmedia',
            'description' => 'required|string',
            'icon' => 'nullable|image|mimes:png,jpg,jpeg,svg,webp|max:40960',
            'meta_title' => 'nullable|string|max:1024',
            'meta_description' => 'nullable|string|max:1024',
        ]);

        if ($request->hasFile('icon')) {

            if ($service->icon && Storage::disk('public')->exists($service->icon)) {
                Storage::disk('public')->delete($service->icon);
            }

            $validated['icon'] = $request->file('icon')->store('services', 'public');

        } else {
            unset($validated['icon']);
        }

        $service->update($validated);

        return redirect()->route('service')
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

    /* =====================================================
     * CONTACT & QUOTES
     * ===================================================== */

    public function quoteRequests()
    {
        return Inertia::render('Contact/QuoteRequestTable', [
            'quoteRequests' => QuoteRequest::latest()->paginate(10),
        ]);
    }

    public function contactlist()
    {
        return Inertia::render('Contact/ContactTable', [
            'contactlist' => ContactList::latest()->paginate(10),
        ]);
    }

    /* =====================================================
     * DASHBOARD
     * ===================================================== */

    public function dashboard()
    {
        $quoteChart = QuoteRequest::select(
                DB::raw("DATE_FORMAT(created_at, '%b') as month"),
                DB::raw("COUNT(*) as total"),
                DB::raw("MONTH(created_at) as month_num")
            )
            ->groupBy("month", "month_num")
            ->orderBy("month_num")
            ->get();

        $contactChart = ContactList::select(
                DB::raw("DATE_FORMAT(created_at, '%b') as month"),
                DB::raw("COUNT(*) as total"),
                DB::raw("MONTH(created_at) as month_num")
            )
            ->groupBy("month", "month_num")
            ->orderBy("month_num")
            ->get();

        return Inertia::render('Dashboard', [
            'stats' => [
                'users' => User::count(),
                'quoteRequests' => QuoteRequest::count(),
                'contacts' => ContactList::count(),
            ],
            'quoteChart' => $quoteChart,
            'contactChart' => $contactChart,
        ]);
    }

    /* =====================================================
     * USERS
     * ===================================================== */

    public function userlist()
    {
        return Inertia::render('User/User', [
            'users' => User::latest()->get()
        ]);
    }

    public function createUser()
    {
        return Inertia::render('User/Create');
    }

    public function storeUser(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'role' => 'required|in:admin,user',
            'permissions' => 'nullable|array',
        ]);

        $permissions = $request->permissions ?? [];

        if ($request->role === "admin") {
            $permissions = [
                "home","about","services","solutions","contact",
                "vision_mission","contact_list","quote_requests","users",
            ];
        }

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'permissions' => $permissions,
        ]);

        return redirect()->route('user.user')
            ->with('success', 'User created successfully!');
    }

    public function editUser(User $user)
    {
        return Inertia::render('User/Edit', ['user' => $user]);
    }

    public function updateUser(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'role' => 'required|in:admin,user',
            'permissions' => 'nullable|array',
        ]);

        $permissions = $request->permissions ?? [];

        if ($request->role === "admin") {
            $permissions = [
                "home","about","services","solutions","contact",
                "vision_mission","contact_list","quote_requests","users",
            ];
        }

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'permissions' => $permissions,
        ]);

        return redirect()->route('user.user')
            ->with('success', 'User updated successfully!');
    }

    public function deleteUser(User $user)
    {
        $user->delete();
        return back();
    }

    /* =====================================================
     * MISSION & VISION
     * ===================================================== */

    public function index()
    {
        return Inertia::render("MissionVision/Index", [
            "missions" => MissionVision::where("type", "mission")->latest()->paginate(5, ["*"], "mission_page"),
            "visions" => MissionVision::where("type", "vision")->latest()->paginate(5, ["*"], "vision_page"),
        ]);
    }

    public function createMV()
    {
        return Inertia::render("MissionVision/Create");
    }

    public function showMV(MissionVision $missionVision)
    {
        return redirect()->route('missionvision.edit', $missionVision->id);
    }

    public function storeMV(Request $request)
    {
        $data = $request->validate([
            "type" => "required|in:mission,vision",
            "title" => "required|string|max:255",
            "description" => "nullable|string",
            "image" => "nullable|image|mimes:jpg,jpeg,png,webp|max:10240",
            "is_active" => "nullable|boolean",
        ]);

        $data["is_active"] = $request->boolean("is_active");

        if ($request->hasFile("image")) {
            $data["image"] = $request->file("image")->store("mission_vision", "public");
        }

        MissionVision::create($data);

        return redirect()->route("missionvision.index")
            ->with("success", "Saved Successfully!");
    }

    public function editMV(MissionVision $missionVision)
    {
        return Inertia::render("MissionVision/Edit", [
            "item" => $missionVision,
        ]);
    }

    public function updateMV(Request $request, MissionVision $missionVision)
    {
        $data = $request->validate([
            "type" => "required|in:mission,vision",
            "title" => "required|string|max:255",
            "description" => "nullable|string",
            "image" => "nullable|image|mimes:jpg,jpeg,png,webp|max:10240",
            "is_active" => "nullable|boolean",
        ]);

        $data["is_active"] = $request->boolean("is_active");

        if ($request->hasFile("image")) {

            if ($missionVision->image && Storage::disk("public")->exists($missionVision->image)) {
                Storage::disk("public")->delete($missionVision->image);
            }

            $data["image"] = $request->file("image")->store("mission_vision", "public");

        } else {
            unset($data["image"]);
        }

        $missionVision->update($data);

        return redirect()->route("missionvision.index")
            ->with("success", "Updated Successfully!");
    }

    public function destroyMV(MissionVision $missionVision)
    {
        if ($missionVision->image && Storage::disk("public")->exists($missionVision->image)) {
            Storage::disk("public")->delete($missionVision->image);
        }

        $missionVision->delete();

        return redirect()->route("missionvision.index")
            ->with("success", "Deleted Successfully!");
    }

    // ============= BLOG ==============
    public function blogIndex()
    {
        $posts = Blog::latest()->get();
        return Inertia::render("Blog/index", [
            "posts" => $posts
        ]);
    }

    public function blogCreate()
    {
        return Inertia::render("Blog/create");
    }

    public function blogStore(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|max:40960',
            'meta_title' => 'nullable|string|max:1024',
            'meta_description' => 'nullable|string|max:1024',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('blog', 'public');
        }

        Blog::create($validated);

        return redirect()->route('blog.index')
            ->with('success', 'Blog post created successfully!');
    }

    public function blogEdit($id)
    {
        $post = Blog::findOrFail($id);
        return Inertia::render("Blog/edit", [
            "post" => $post
        ]);
    }

    public function blogUpdate(Request $request, $id)
    {
        $post = Blog::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|max:40960',
            'meta_title' => 'nullable|string|max:1024',
            'meta_description' => 'nullable|string|max:1024',
        ]);

        if ($request->hasFile('image')) {

            if ($post->image && Storage::disk('public')->exists($post->image)) {
                Storage::disk('public')->delete($post->image);
            }

            $validated['image'] = $request->file('image')->store('blog', 'public');

        } else {
            unset($validated['image']);
        }

        $post->update($validated);

        return redirect()->route('blog.index')
            ->with('success', 'Blog post updated successfully!');
    }

    public function blogDestroy($id)
    {
        $post = Blog::findOrFail($id);

        if ($post->image && Storage::disk('public')->exists($post->image)) {
            Storage::disk('public')->delete($post->image);
        }

        $post->delete();

        return redirect()->route('blog.index')
            ->with('success', 'Blog post deleted successfully!');
    }

    public function blogContentImage(Request $request)
    {
        $request->validate([
            'image' => [
                'required',
                'image',
                'mimes:jpeg,jpg,png,gif,webp',
                'max:5120',
            ],
        ]);

        $path = $request->file('image')->store(
            'blog/content',
            'public'
        );

        return response()->json([
            'success' => true,
            'url' => '/storage/' . $path,
        ]);
    }


}
