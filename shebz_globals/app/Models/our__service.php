<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class our__service extends Model
{
    protected $table = 'our__services';
        protected $fillable = [
        'icon',
        'title',
        'description',
        'created_at',
        'updated_at',
    ];
}
