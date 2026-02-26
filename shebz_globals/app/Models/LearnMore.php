<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LearnMore extends Model
{
   protected $fillable = [
        'top_image',
        'hero_title',
        'hero_paragraph1',
        'hero_paragraph2',
        'expertise_title',
        'expertise_items',
        'why_title',
        'why_description',
        'is_active',
    ];

    protected $casts = [
        'expertise_items' => 'array',
        'is_active' => 'boolean',
    ];
}
