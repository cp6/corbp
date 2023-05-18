<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class Location extends Model
{
    use HasFactory;

    protected $fillable = ['slug', 'dir', 'name', 'area', 'state', 'state_short', 'country', 'country_code', 'postcode', 'lat', 'lon', 'media_count'];

    protected $with = ['random_image'];

    public function media(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Media::class, 'location_id', 'id')->without(['location', 'sub_location', 'exif']);
    }

    public function random_image(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Media::class, 'location_id', 'id')->without(['location', 'sub_location', 'exif'])->inRandomOrder();
    }

    public function sub_locations(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(SubLocation::class, 'location_id', 'id');
    }

    public static function cached()
    {
        return Cache::remember("locations", now()->addDays(2), function () {
            return self::get();
        });
    }

    public static function getGeoApiData(string $location)
    {
        return Http::get('http://api.positionstack.com/v1/forward', [
            'access_key' => env('GEO_POSTION_API_KEY'),
            'query' => $location,
            'country_module' => 1
        ])->json();
    }

    public static function randoms(int $amount = 4)
    {
        return Cache::remember("r_locations.{$amount}", now()->addSeconds(30), function () use ($amount) {
            return self::inRandomOrder()->take($amount)->get();
        });
    }

}
