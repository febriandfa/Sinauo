<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Materi>
 */
class MateriFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => $this->faker->name(),
            'jumlah' => $this->faker->randomDigit(),
            'deskripsi' => $this->faker->paragraph(),
            'cover' => $this->faker->randomElement(['placeholder-1.jpg', 'placeholder-2.jpg']),
        ];
    }
}
