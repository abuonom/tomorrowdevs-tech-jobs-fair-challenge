<?php

    use Illuminate\Database\Seeder;
    use Illuminate\Support\Facades\DB;

    class ContactTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contactTypeLabels = [
            'Internal',
            'External',
            'Partner',
            'Created by me',
        ];

        foreach ($contactTypeLabels as $label) {
            DB::table('contact_types')::create(['label' => $label]);
        }
    }
}
