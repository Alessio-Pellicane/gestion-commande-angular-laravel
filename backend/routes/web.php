<?php

use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\CommandeController;
use App\Http\Controllers\Api\ProduitController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::apiResource('clients', ClientController::class);
Route::apiResource('produits', ProduitController::class);
Route::apiResource('commandes',CommandeController::class);

