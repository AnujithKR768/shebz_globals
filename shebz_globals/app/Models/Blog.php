<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $table = 'blog';
    protected $fillable = [
        'title',
        'content',
        'image' ,
        'meta_title',
        'meta_description',
    ];
}
