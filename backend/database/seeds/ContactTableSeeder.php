<?php

use Illuminate\Database\Seeder;
use App\Contact;
use Faker\Factory as Faker;

class ContactTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        // Create 5 fake contacts
        for ($i = 0; $i < 5; $i++) {
            Contact::create([
                'profile_picture' => $faker->imageUrl(),
                'name' => $faker->firstName,
                'surname' => $faker->lastName,
                'email' => $faker->unique()->safeEmail,
                'number' => $faker->phoneNumber,
                'social_media_url' => $faker->url,
                'access' => $faker->randomElement(['General', 'Admin']),
                'date_of_birth' => $faker->date,
                'type_id' => $faker->randomNumber(5),
                'note' => $faker->sentence,
                'user_id' => 1 // Assuming user_id is a foreign key
            ]);
        }
    }
}
