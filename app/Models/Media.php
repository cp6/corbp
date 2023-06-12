<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Intervention\Image\Facades\Image;

class Media extends Model
{
    use HasFactory;

    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = ['parent_id', 'slug', 'group_upload_sequence', 'directory_id', 'location_id', 'sub_location_id', 'processed', 'display', 'is_parent', 'is_thumbnail', 'type', 'original_filename', 'extension', 'width', 'height', 'size', 'has_watermark'];

    protected $with = ['directory', 'location', 'sub_location', 'titleDesc', 'exif', 'tags'];

    public function directory(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Directory::class, 'id', 'directory_id');
    }

    public function exif(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Exif::class, 'media_id', 'id');
    }

    public function titleDesc(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(TitleDescription::class, 'id', 'id');
    }

    public function location(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Location::class, 'id', 'location_id');
    }

    public function sub_location(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(SubLocation::class, 'id', 'sub_location_id');
    }

    public function tags(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(TagAssigned::class, 'media_id', 'id');
    }

    public static function amount()
    {
        return Cache::remember("amount", now()->addMinutes(2), function () {
            return self::count();
        });
    }

    public static function latest(int $amount = 4)
    {
        return Cache::remember("latest.{$amount}", now()->addMinutes(2), function () use ($amount) {
            return self::where('processed', 1)->take($amount)->orderBy('created_at', 'desc')->get();
        });
    }

    public static function forLocation(Location $location, int $current_page = 1)
    {
        return Cache::remember("media.location.{$location->id}.{$current_page}", now()->addDay(1), function () use ($location, $current_page) {
            return self::without(['location'])->where('location_id', $location->id)->orderBy('created_at', 'desc')->paginate(8, ['*'], 'page', $current_page);
        });
    }

    public static function forSubLocation(SubLocation $subLocation, int $current_page = 1)
    {
        return Cache::remember("media.sublocation.{$subLocation->id}.{$current_page}", now()->addDay(1), function () use ($subLocation, $current_page) {
            return self::without(['location'])->where('sub_location_id', $subLocation->id)->orderBy('created_at', 'desc')->paginate(8, ['*'], 'page', $current_page);
        });
    }

    public static function forLocationNoPagination(Location $location)
    {
        return Cache::remember("media.location.{$location->id}", now()->addMonths(3), function () use ($location) {
            return self::without(['location'])->where('location_id', $location->id)->orderBy('created_at', 'desc')->get();
        });
    }

    public static function forDevice(Device $device, int $current_page = 1)
    {
        return Cache::remember("media.device.{$device->id}.{$current_page}", now()->addDay(1), function () use ($device, $current_page) {
            return Exif::with(['media'])->without(['device'])->where('device_id', $device->id)->orderBy('created_at', 'desc')->paginate(8, ['*'], 'page', $current_page);
        });
    }

    public static function forLens(Lens $lens, int $current_page = 1)
    {
        return Cache::remember("media.lens.{$lens->id}.{$current_page}", now()->addDay(1), function () use ($lens, $current_page) {
            return Exif::with(['media'])->without(['device'])->where('lens_id', $lens->id)->orderBy('created_at', 'desc')->paginate(8, ['*'], 'page', $current_page);
        });
    }

    public static function createSmallerImage($image, string $save_as, int $width = 180, int $height = 140): \Intervention\Image\Image
    {
        $img = Image::make($image)->resize($width, $height, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });

        return $img->save($save_as, 96);
    }

    public static function watermarkImage($image, string $save_as, int $x = 40, int $y = 40, string $watermark_filename = 'corbpie_watermark_medium.png'): \Intervention\Image\Image
    {
        $img = Image::make($image);
        $watermark = Image::make(storage_path('app/private/') . $watermark_filename);
        $img->insert($watermark, 'bottom-left', $x, $y);
        $img->insert($watermark, 'top-right', $x, $y);
        return $img->save($save_as);
    }

    public static function stats(): array
    {
        return Cache::remember("stats", now()->addWeeks(2), function () {
            return [
                'total' => self::where('processed', 1)->count(),
                'total_size' => self::where('processed', 1)->sum('size'),
                'first_upload' => self::where('processed', 1)->orderBy('created_at')->first()->value('created_at'),
                'latest_upload' => self::where('processed', 1)->orderBy('created_at', 'desc')->first()->value('created_at'),
                'oldest_image' => Exif::with('media')->orderBy('captured_at')->first()->value('captured_at'),
                'newest_image' => Exif::with('media')->orderBy('captured_at', 'desc')->first()->value('captured_at')
            ];
        });
    }


}
