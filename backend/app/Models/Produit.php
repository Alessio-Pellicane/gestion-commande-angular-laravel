<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Produit extends Model
{
    use HasFactory;
    protected $fillable=[
        "nom_type",
        "nom_parfum",
        "prix_unitaire",
        "en_stock",
    ];
}
