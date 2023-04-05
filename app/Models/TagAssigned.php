<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TagAssigned extends Model
{
    use HasFactory;

    protected $table = 'tag_assigned';
    protected $fillable = ['tag_id', 'media_id'];

}
