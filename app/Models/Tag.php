<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = ['slug', 'name', 'count'];

    public function assigned(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(TagAssigned::class, 'tag_id', 'tag_id');
    }

    public static function cached()
    {
        return Cache::remember("tags", now()->addDays(2), function () {
            return self::get();
        });
    }

    public static function randoms(int $amount = 4)
    {
        return Cache::remember("r_tags.{$amount}", now()->addSeconds(30), function () use ($amount) {
            return self::inRandomOrder()->take($amount)->get();
        });
    }

}
