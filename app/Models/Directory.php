<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Directory extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'count'];

    public static function cached(): array
    {//Cache the directories into an array
        return Cache::remember("directories", now()->addMonth(1), function () {
            return self::get(['id','name'])->toArray();
        });
    }

    public static function randomDirectory(): array
    {//Return one directory randomly selected from available
        $array = self::cached();
        return $array[random_int(0, count($array) - 1)];
    }

    public static function generateDirectories(): void
    {//Generate the random directories
        $amount = env("UNIQUE_DIRECTORIES", 12);

        for ($i = 1; $i <= $amount; $i++) {
            $directory = new Directory();
            $directory->name = \Str::random(8);
            $directory->save();
        }

    }

}
