<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Produit;
use App\Models\Type;
use App\Models\Parfum;

class ProduitFactory extends Factory
{
    protected $model = Produit::class;

    public function definition(): array
    {
        return [
            'type_id' => Type::inRandomOrder()->first()->id,
            'parfum_id' => Parfum::inRandomOrder()->first()->id,
            'prix_unitaire' => $this->faker->randomFloat(2, 0, 100),
            'en_stock' => $this->faker->boolean(),
        ];
    }
}
