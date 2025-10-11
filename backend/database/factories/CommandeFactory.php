<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Client;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Commande>
 */
class CommandeFactory extends Factory
{
    protected $model = \App\Models\Commande::class;

    public function definition(): array
    {
        return [
            "date_commande" => $this->faker->date(),
            "frais_livraison" => $this->faker->randomFloat(2,0,10),
            "remise" => $this->faker->randomFloat(2,0,10),
            "status" => $this->faker->randomElement(["En attente","Payé"]),
            "client_id" => Client::inRandomOrder()->first()->id ?? Client::factory()->create()->id,
        ];
    }
}
