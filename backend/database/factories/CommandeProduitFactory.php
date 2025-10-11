<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\CommandeProduit;
use App\Models\Commande;
use App\Models\Produit;

class CommandeProduitFactory extends Factory
{
    protected $model = CommandeProduit::class;

    public function definition(): array
    {
        return [
            'commande_id' => Commande::inRandomOrder()->first()->id,
            'produit_id' => Produit::inRandomOrder()->first()->id,
            'quantite' => $this->faker->numberBetween(1, 10),
            'prix_unitaire' => $this->faker->randomFloat(2, 0, 100),
        ];
    }
}
