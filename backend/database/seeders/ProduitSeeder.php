<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProduitSeeder extends Seeder
{
    public function run(): void
    {
        \App\Models\Produit::factory(3)->create();
    }
}
