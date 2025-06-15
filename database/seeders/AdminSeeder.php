<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
           Admin::create([
            'name' => 'binta',
            'email' => 'binta@example.com',
            'password' => Hash::make('binta123'), // Change this password
        ]);
    }
}
