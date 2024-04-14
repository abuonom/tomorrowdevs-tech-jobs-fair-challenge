<?php

    use App\User;
    use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        User::create([
            'name' => $faker->userName,
            'email' => 'user@gmail.com',
            'password' => bcrypt('password'), // Assuming you want to set a default password
            'last_connected' => $faker->dateTimeBetween('-1 years', 'now'),
            'created_on' => $faker->dateTimeBetween('-2 years', '-1 years'),
            'is_admin' => 1
        ]);

        User::create([
            'name' => $faker->userName,
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password'), // Assuming you want to set a default password
            'last_connected' => $faker->dateTimeBetween('-1 years', 'now'),
            'created_on' => $faker->dateTimeBetween('-2 years', '-1 years'),
            'is_admin' => 1
        ]);
    }
}
