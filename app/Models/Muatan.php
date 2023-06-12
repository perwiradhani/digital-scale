<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Muatan extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'jenis_muatan',
        'berat_muatan',
        'beban_seluruh',
        'id_user',
        'id_truck',
        'plat',
        'status',
    ];
}
