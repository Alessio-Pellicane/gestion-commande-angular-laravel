<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class NoteParfumSeeder extends Seeder
{
    public function run(): void
    {
        \App\Models\NoteParfum::factory(3)->create();
    }
}
