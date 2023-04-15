<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;

class Location extends Model
{
    use HasFactory;

    protected $fillable = ['slug', 'dir', 'name', 'area', 'state', 'state_short', 'country', 'country_code', 'postcode', 'lat', 'lon', 'media_count'];


    public function media(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Media::class, 'location_id', 'id')->where('is_parent', 1);
    }

    public function sub_locations(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(SubLocation::class, 'location_id', 'id');
    }

    public static function getGeoApiData(string $location)
    {
        return Http::get('http://api.positionstack.com/v1/forward', [
            'access_key' => env('GEO_POSTION_API_KEY'),
            'query' => $location,
            'country_module' => 1
        ])->json();
    }

}
