<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Intervention\Image\Facades\Image;

class Exif extends Model
{
    use HasFactory;

    protected $fillable = ['media_id', 'device_id', 'lens_id', 'iso_raw', 'iso', 'f_stop', 'exposure', 'shutter_speed_raw', 'shutter_speed', 'focal_length', 'lat', 'lon', 'direction', 'height', 'software', 'captured_at'];

    protected $with = ['device', 'lens'];

    public function device(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Device::class, 'id', 'device_id');
    }
    public function lens(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Lens::class, 'id', 'lens_id');
    }

}
