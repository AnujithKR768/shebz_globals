<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\KnowledgeHub;
use App\Models\KnowledgeHubItem;
use Inertia\Inertia;

class KnowledgeHubItemAdminController extends Controller
{
     public function index()
    {
        return Inertia::render("Solutions/KnowledgeHubItems/Index", [
            "items" => KnowledgeHubItem::with("knowledgeHub")
                ->orderBy("position")
                ->paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render("Solutions/KnowledgeHubItems/Create", [
            "hubList" => KnowledgeHub::orderBy("id")->get(["id", "title"]),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "knowledge_hub_id" => "required|exists:knowledge_hubs,id",
            "text" => "required|string|max:255",
            "position" => "nullable|integer",
            "is_active" => "nullable|boolean",
        ]);

        KnowledgeHubItem::create($data);

        return redirect()->route("knowledgehubitem.admin.index")->with("success", "Knowledge Hub Item Added!");
    }

    public function edit(KnowledgeHubItem $knowledgeHubItem)
    {
        return Inertia::render("Solutions/KnowledgeHubItems/Edit", [
            "item" => $knowledgeHubItem,
            "hubList" => KnowledgeHub::orderBy("id")->get(["id", "title"]),
        ]);
    }

    public function update(Request $request, KnowledgeHubItem $knowledgeHubItem)
    {
        $data = $request->validate([
            "knowledge_hub_id" => "required|exists:knowledge_hubs,id",
            "text" => "required|string|max:255",
            "position" => "nullable|integer",
            "is_active" => "nullable|boolean",
        ]);

        $knowledgeHubItem->update($data);

        return redirect()->route("knowledgehubitem.admin.index")->with("success", "Knowledge Hub Item Updated!");
    }

    public function destroy(KnowledgeHubItem $knowledgeHubItem)
    {
        $knowledgeHubItem->delete();
        return redirect()->route("knowledgehubitem.admin.index")->with("success", "Knowledge Hub Item Deleted!");
    }
}
