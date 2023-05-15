<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use stdClass;

class Directory extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'count'];

    public static function cached(): array
    {//Cache ALL the directories into an array
        return Cache::remember("directories", now()->addMonths(3), function () {
            return self::get(['id','name'])->toArray();
        });
    }

    public static function random(): stdClass
    {//Return one directory randomly selected from available
        $array = self::cached();
        $result = $array[random_int(0, count($array) - 1)];

        $obj = new stdClass();
        $obj->id = $result['id'];
        $obj->name = $result['name'];

        return $obj;
    }

}
