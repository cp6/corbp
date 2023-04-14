<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TitleDescription extends Model
{
    use HasFactory;


    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = ['id', 'title', 'description'];

}
