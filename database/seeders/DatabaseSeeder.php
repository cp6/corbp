<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Directory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

         \App\Models\User::factory()->create([
             'name' => 'chief',
             'email' => 'test@mail.com',
             'email_verified_at' => now(),
             'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',//password
             'remember_token' => Str::random(10),
             'api_token' => 'vASuNoCPgjiBxfhookSdiIQVNEu2kAZy0buHpeCUTFkg7bOtXFxT3CWGNvcg5KMC'
         ]);

        $amount = env("UNIQUE_DIRECTORIES", 20);

        for ($i = 1; $i <= $amount; $i++) {
            $directory = new Directory();
            $directory->name = \Str::random(8);
            $directory->save();
        }

    }
}
