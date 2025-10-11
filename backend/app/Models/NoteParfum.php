<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NoteParfum extends Model
{
    use HasFactory;
    protected $fillable=[
        "nom_parfum",
        "nom_note",
        "pourcentage"
    ];
}
