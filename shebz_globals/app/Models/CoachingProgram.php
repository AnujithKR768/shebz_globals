<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CoachingProgram extends Model
{
    protected $fillable = [
    'coaching_mentorship_id',
    'text',
    'position',
    'is_active',
];
     public function coachingMentorship()
    {
        return $this->belongsTo(CoachingMentorship::class);
    }
}
