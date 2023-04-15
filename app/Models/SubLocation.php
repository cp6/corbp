<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubLocation extends Model
{
    use HasFactory;

    protected $fillable = ['location_id', 'slug', 'name', 'media_count', 'lat', 'lon'];

    public function location(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Location::class, 'id', 'location_id');
    }

}
