<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FounderMessage extends Model
{
     use HasFactory;

    protected $fillable = [
        'title',
        'message',
        'founder_name',
        'founder_role',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
