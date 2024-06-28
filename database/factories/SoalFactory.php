<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\KategoriKuis;
use Faker\Generator as Faker;
use App\Models\Soal;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Soal>
 */
class SoalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'kategori_kuis_id' => function () {
                return KategoriKuis::inRandomOrder()->first();
            },
            'soal' => $this->faker->sentence(),
            'gambar' => $this->faker->randomElement(['placeholder-1.jpg', 'placeholder-2.jpg'])
        ];
    }
}
