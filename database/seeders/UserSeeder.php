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
        User::factory()->create([
            'nome' => 'Admin',
            'email' => 'kaueleivas0@gmail.com',
            'password' => bcrypt('12345678'),
            'username' => 'kaueleivas',
            'birth_date' => '2003-03-16',
            'bios' => 'Administrador do sistema, criado por Kaue Leivas',
            'email_verified_at' => now(),
            ]);
        User::factory(10)->create();
    }
}
