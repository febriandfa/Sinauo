<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Absensi;
use App\Models\KategoriKuis;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Tugas;
use App\Models\Materi;
use App\Models\Opsi;
use App\Models\Referensi;
use App\Models\Soal;
use App\Models\SubMateri;
use App\Models\TugasResult;
use App\Models\Tutorial;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);


        User::factory(20)->create();
        Absensi::factory(1)->create();
        Tutorial::factory(5)->create();
        Referensi::factory(5)->create();
        Tugas::factory(5)->create();
        TugasResult::factory(20)->create();
        Materi::factory(5)->create();
        SubMateri::factory(5)->create();

        KategoriKuis::factory(3)->create();
        Soal::factory(10)->create();
        Opsi::factory(80)->create();
    }
}
