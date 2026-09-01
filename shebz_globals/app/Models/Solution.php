<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Solution extends Model
{
    protected $fillable = [
    'title',
    'description',
    'image',
    'position',
    'is_active',
    'meta_title',
    'meta_description',
];

}
