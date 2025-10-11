<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CommandeProduitSeeder extends Seeder
{
    public function run(): void
    {
    \App\Models\CommandeProduit::factory(3)->create();
    }
}
