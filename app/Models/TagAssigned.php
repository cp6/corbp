<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TagAssigned extends Model
{
    use HasFactory;

    protected $table = 'tag_assigned';

    protected $fillable = ['tag_id', 'media_id'];

    protected $with = ['tag'];

    public function tag(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Tag::class, 'tag_id', 'id');
    }

    public function media(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Media::class, 'id', 'media_id');
    }

}
