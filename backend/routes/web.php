<?php

use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\CommandeController;
use App\Http\Controllers\Api\ProduitController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

//Permet de regrouper les routes API en un seul prefix "api/maRessource"
Route::prefix("api")->group(function(){
    Route::apiResource('clients', ClientController::class);
    Route::apiResource('produits', ProduitController::class);
    Route::apiResource('commandes',CommandeController::class);
});
