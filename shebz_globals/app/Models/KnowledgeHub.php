<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KnowledgeHub extends Model
{
    protected $fillable = [
    'title',
    'subtitle',
    'box_title',
    'image',
    'is_active',
    ];
    public function items()
    {
        return $this->hasMany(KnowledgeHubItem::class)->orderBy("position");
    }
}
