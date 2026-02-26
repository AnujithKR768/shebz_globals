<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutStory extends Model
{
    use HasFactory;

    protected $fillable = [
        'page',
        'heading',
        'title',
        'paragraph1',
        'paragraph2',
        'image',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
