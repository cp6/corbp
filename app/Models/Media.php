<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Intervention\Image\Facades\Image;

class Media extends Model
{
    use HasFactory;

    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = ['parent_id', 'slug', 'group_upload_sequence', 'directory_id', 'location_id', 'sub_location_id', 'processed', 'display', 'is_parent', 'is_thumbnail', 'type', 'original_filename', 'extension', 'width', 'height', 'size', 'has_watermark'];

    protected $with = ['location', 'sub_location', 'titleDesc', 'exif'];

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

    public static function createSmallerImage($image, string $save_as, int $width = 180, int $height = 140): \Intervention\Image\Image
    {
        $img = Image::make($image)->resize($width, $height, function ($constraint) {
            $constraint->aspectRatio();
        });

        return $img->save($save_as, 98);
    }

    public static function watermarkImage($image, string $save_as, int $x = 40, int $y = 40, string $watermark_filename = 'corbpie_watermark_medium.png'): \Intervention\Image\Image
    {
        $img = Image::make($image);
        $watermark = Image::make(storage_path('app/private/') . $watermark_filename);
        $img->insert($watermark, 'bottom-left', $x, $y);
        $img->insert($watermark, 'top-right', $x, $y);
        return $img->save($save_as);
    }

}
