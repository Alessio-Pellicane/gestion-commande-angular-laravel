<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Parfum;

class ParfumFactory extends Factory
{
    protected $model = Parfum::class;

    public function definition(): array
    {
        return [
            'nom_parfum' => $this->faker->unique()->word(),
        ];
    }
}
