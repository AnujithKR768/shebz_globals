<?php

namespace App\Http\Controllers;

use App\Models\FounderMessage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FounderMessageController extends Controller
{
    // ADMIN LIST
    public function index()
    {
        return Inertia::render("Message/Index", [
            "items" => FounderMessage::latest()->paginate(10),
        ]);
    }

    // ADMIN CREATE
    public function create()
    {
        return Inertia::render("Message/Create");
    }

    // STORE
    public function store(Request $request)
    {
        $data = $request->validate([
            "title" => "required|string|max:255",
            "message" => "nullable|string",
            "founder_name" => "required|string|max:255",
            "founder_role" => "nullable|string|max:255",
            "is_active" => "nullable|boolean",
        ]);

        // only 1 active
        if (!empty($data["is_active"]) && $data["is_active"] == true) {
            FounderMessage::where("is_active", true)->update(["is_active" => false]);
        }

        FounderMessage::create($data);

        return redirect()->route("founder.admin.index")->with("success", "Founder Message Created!");
    }

    // EDIT
    public function edit(FounderMessage $founderMessage)
    {
        return Inertia::render("Message/Edit", [
            "item" => $founderMessage,
        ]);
    }

    // UPDATE
    public function update(Request $request, FounderMessage $founderMessage)
    {
        $data = $request->validate([
            "title" => "required|string|max:255",
            "message" => "nullable|string",
            "founder_name" => "required|string|max:255",
            "founder_role" => "nullable|string|max:255",
            "is_active" => "nullable|boolean",
        ]);

        // only 1 active
        if (!empty($data["is_active"]) && $data["is_active"] == true) {
            FounderMessage::where("id", "!=", $founderMessage->id)->update(["is_active" => false]);
        }

        $founderMessage->update($data);

        return redirect()->route("founder.admin.index")->with("success", "Founder Message Updated!");
    }

    // DELETE
    public function destroy(FounderMessage $founderMessage)
    {
        $founderMessage->delete();

        return redirect()->route("founder.admin.index")->with("success", "Founder Message Deleted!");
    }
}
