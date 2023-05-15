<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Device extends Model
{
    use HasFactory;

    protected $fillable = ['slug', 'name', 'short_name', 'brand', 'model', 'type'];

    public static function randoms(int $amount = 4)
    {
        return Cache::remember("r_devices.{$amount}", now()->addSeconds(30), function () use ($amount) {
            return self::inRandomOrder()->take($amount)->get();
        });
    }

}
