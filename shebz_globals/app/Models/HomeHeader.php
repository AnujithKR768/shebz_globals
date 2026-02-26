<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class HomeHeader extends Model
{
     protected $table = 'home_headers';

    protected $fillable = [
        'background_image',
        'hero_title',
        'hero_paragraph1',
        'hero_paragraph2',
        'button_text',
        'button_link',
        'banner_text',
        'is_active',
    ];
}
