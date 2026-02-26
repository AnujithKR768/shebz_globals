<?php

namespace App\Http\Controllers;

use App\Models\CoreValue;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CoreValueController extends Controller
{
    public function index()
    {
        return Inertia::render("About/CoreValue/Index", [
            "items" => CoreValue::orderBy("position")->paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render("About/CoreValue/Create");
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "value_title" => "required|string|max:255",
            "value_description" => "nullable|string|max:1000",
            "position" => "nullable|integer",
            "is_active" => "nullable|boolean",
        ]);

        CoreValue::create($data);

        return redirect()->route("corevalue.admin.index")->with("success", "Core Value Added!");
    }

    public function edit(CoreValue $coreValue)
    {
        return Inertia::render("About/CoreValue/Edit", [
            "item" => $coreValue,
        ]);
    }

    public function update(Request $request, CoreValue $coreValue)
    {
        $data = $request->validate([
            "value_title" => "required|string|max:255",
            "value_description" => "nullable|string|max:1000",
            "position" => "nullable|integer",
            "is_active" => "nullable|boolean",
        ]);

        $coreValue->update($data);

        return redirect()->route("corevalue.admin.index")->with("success", "Core Value Updated!");
    }

    public function destroy(CoreValue $coreValue)
    {
        $coreValue->delete();

        return redirect()->route("corevalue.admin.index")->with("success", "Core Value Deleted!");
    }
}
