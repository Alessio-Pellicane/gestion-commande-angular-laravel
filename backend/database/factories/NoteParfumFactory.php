<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\NoteParfum;
use App\Models\Note;
use App\Models\Parfum;

class NoteParfumFactory extends Factory
{
    protected $model = NoteParfum::class;

    public function definition(): array
    {
        return [
            'note_id' => Note::inRandomOrder()->first()->id,
            'parfum_id' => Parfum::inRandomOrder()->first()->id,
            'pourcentage' => $this->faker->randomFloat(2, 0, 100),
        ];
    }
}
