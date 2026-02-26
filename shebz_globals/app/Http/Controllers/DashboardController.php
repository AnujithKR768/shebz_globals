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
            'description' => 'required|string',
        ]);

        if ($request->hasFile('icon')) {

            $path = $request->file('icon')->store('services', 'public');

            // ⭐ FORCE public_html
            $destination = base_path('public_html/storage/' . $path);

            if (!is_dir(dirname($destination))) {
                mkdir(dirname($destination), 0755, true);
            }

            @copy(storage_path('app/public/' . $path), $destination);

            $validated['icon'] = $path;
        }

        OurService::create($validated);

        return redirect()->route('service')->with('success', 'Service added successfully');
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
            'description' => 'required|string',
            'icon' => 'nullable|image|mimes:png,jpg,jpeg,svg|max:40960',
        ]);

        if ($request->hasFile('icon')) {

            // delete Laravel file
            if ($service->icon && Storage::disk('public')->exists($service->icon)) {
                Storage::disk('public')->delete($service->icon);
            }

            // delete public_html file
            $oldPublic = base_path('public_html/storage/' . $service->icon);
            if ($service->icon && file_exists($oldPublic)) {
                @unlink($oldPublic);
            }

            // store new
            $path = $request->file('icon')->store('services', 'public');

            $destination = base_path('public_html/storage/' . $path);

            if (!is_dir(dirname($destination))) {
                mkdir(dirname($destination), 0755, true);
            }

            @copy(storage_path('app/public/' . $path), $destination);

            $validated['icon'] = $path;

        } else {
            unset($validated['icon']);
        }

        $service->update($validated);

        return redirect()->route('service')->with('success', 'Service updated successfully!');
    }

    public function destroy($id)
    {
        $service = OurService::findOrFail($id);

        if ($service->icon && Storage::disk('public')->exists($service->icon)) {
            Storage::disk('public')->delete($service->icon);
        }

        $publicFile = base_path('public_html/storage/' . $service->icon);
        if ($service->icon && file_exists($publicFile)) {
            @unlink($publicFile);
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

        return redirect()->route('user.user')->with('success', 'User created successfully!');
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

        return redirect()->route('user.user')->with('success', 'User updated successfully!');
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

            $path = $request->file("image")->store("mission_vision", "public");

            $destination = base_path('public_html/storage/' . $path);

            if (!is_dir(dirname($destination))) {
                mkdir(dirname($destination), 0755, true);
            }

            @copy(storage_path('app/public/' . $path), $destination);

            $data["image"] = $path;
        }

        MissionVision::create($data);

        return redirect()->route("missionvision.index")->with("success", "Saved Successfully!");
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

            $oldPublic = base_path('public_html/storage/' . $missionVision->image);
            if ($missionVision->image && file_exists($oldPublic)) {
                @unlink($oldPublic);
            }

            $path = $request->file("image")->store("mission_vision", "public");

            $destination = base_path('public_html/storage/' . $path);

            if (!is_dir(dirname($destination))) {
                mkdir(dirname($destination), 0755, true);
            }

            @copy(storage_path('app/public/' . $path), $destination);

            $data["image"] = $path;

        } else {
            unset($data["image"]);
        }

        $missionVision->update($data);

        return redirect()->route("missionvision.index")->with("success", "Updated Successfully!");
    }

    public function destroyMV(MissionVision $missionVision)
    {
        if ($missionVision->image && Storage::disk("public")->exists($missionVision->image)) {
            Storage::disk("public")->delete($missionVision->image);
        }

        $publicFile = base_path('public_html/storage/' . $missionVision->image);
        if ($missionVision->image && file_exists($publicFile)) {
            @unlink($publicFile);
        }

        $missionVision->delete();

        return redirect()->route("missionvision.index")->with("success", "Deleted Successfully!");
    }
}
