<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KnowledgeHubItem extends Model
{
    protected $fillable = [
        "knowledge_hub_id",
        "text",
        "position",
        "is_active",
    ];

     public function knowledgeHub()
    {
        return $this->belongsTo(KnowledgeHub::class);
    }
}
