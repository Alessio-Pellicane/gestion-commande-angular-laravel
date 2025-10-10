<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    protected $fillable=[
        "date_commande",
        "frais_livraison",
        "remise",
        "status",
        "client_id",
    ];
}
