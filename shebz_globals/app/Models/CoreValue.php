<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoreValue extends Model
{
    use HasFactory;

    protected $fillable = [
        "value_title",
        "value_description",
        "position",
        "is_active",
    ];

    protected $casts = [
        "is_active" => "boolean",
    ];
}
