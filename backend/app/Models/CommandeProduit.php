<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CommandeProduit extends Model
{
    use HasFactory;
    protected $fillable=[
        "commande_id",
        "produit_id",
        "quantite",
        "prix_unitaire",
    ];
}
