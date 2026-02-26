<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CoachingMentorship extends Model
{
    protected $fillable = [
    'title',
    'subtitle',
    'image',
    'is_active',
];

public function programs()
{
    return $this->hasMany(CoachingProgram::class)->orderBy('position');
}

}
