<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactPageContent extends Model
{
    protected $fillable = [
        'page_title',
        'page_description',
        'map_embed_url',

        'email',
        'website',
        'head_office',

        'whatsapp_number',
        'whatsapp_text',

        'linkedin_url',

        'why_title',
        'why_description',
        'why_points',

        'is_active',

        'right_title',
        'right_description',

        // SEO
        'meta_title',
        'meta_description',
    ];

    protected $casts = [
        'why_points' => 'array',
        'is_active' => 'boolean',
    ];
}
