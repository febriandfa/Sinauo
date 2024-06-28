<?php

namespace Database\Factories;

use App\Models\Materi;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class SubMateriFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'materi_id' => Materi::inRandomOrder()->first()->id,
            'nama' => $this->faker->name(),
            'deskripsi' => $this->faker->paragraph(),
            'cover' => $this->faker->randomElement(['placeholder-1.jpg', 'placeholder-2.jpg']),
            'file' => $this->faker->randomElement(['placeholder-1.pdf']),
        ];
    }
}
