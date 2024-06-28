<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Referensi>
 */
class ReferensiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'judul' => $this->faker->sentence(),
            'sumber' => $this->faker->url(),
            'cover' => $this->faker->randomElement(['placeholder-1.jpg', 'placeholder-2.jpg']),
            'file' => $this->faker->randomElement(['placeholder-1.pdf']),


        ];
    }
}
