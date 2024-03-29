<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lens extends Model
{
    use HasFactory;

    protected $fillable = ['slug', 'name', 'short_name', 'brand', 'model', 'min_mm', 'max_mm', 'min_aperture', 'max_aperture', 'type'];

}
