<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NoteParfum extends Model
{
    protected $fillable=[
        "nom_parfum",
        "nom_note",
        "pourcentage"
    ];
}
