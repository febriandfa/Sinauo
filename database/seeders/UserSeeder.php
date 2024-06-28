<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $guru = User::create([
            'name' => 'Guru',
            'email' => 'guru.sinauo@febriandfa.com',
            'password' => bcrypt('guru123'),
        ]);
        $guru->assignRole('guru');

        $siswa = User::create([
            'name' => 'siswa',
            'email' => 'siswa.sinauo@febriandfa.com',
            'password' => bcrypt('siswa123'),
        ]);
        $siswa->assignRole('siswa');
    }
}
