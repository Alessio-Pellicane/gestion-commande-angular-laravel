<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
   
    protected$model = \App\Models\Client::class;

    public function definition(): array
    {
        return [
            "nom"=>$this->faker->lastName(),
            "prenom"=>$this->faker->firstName(),
            "date_de_naissance"=>$this->faker->date(),
            "telephone"=>$this->faker->phoneNumber(),
            "email"=>$this->faker->unique()->safeEmail(),
        ];
    }
}
