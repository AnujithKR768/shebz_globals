<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = [
        'name',
        'message',
        'rating',
        'date',
        'image',
        'is_active'
    ];
}
