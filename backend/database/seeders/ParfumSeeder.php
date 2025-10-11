<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ParfumSeeder extends Seeder
{
    public function run(): void
    {
        \App\Models\Parfum::factory(3)->create();
    }
}
