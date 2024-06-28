<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubMateri extends Model
{
    use HasFactory;

    protected $table = 'sub_materis';

    protected $fillable = [
        'nama',
        'deskripsi',
        'cover',
        'file'
    ];


    public function materi()
    {
        return $this->belongsTo(Materi::class, 'materi_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function isSeen() {
        return $this->hasMany(SubateriSeen::class, 'submateri_id', 'id');
    }
}
