<?php

    use Illuminate\Database\Seeder;
    use Illuminate\Support\Facades\DB;

    class DepartmentsTableSeeder extends Seeder
    {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run()
        {
            $departments = ['IT', 'HR', 'Finance', 'Support'];

            // Insert data into the departments table
            foreach ($departments as $department) {
                DB::table('departments')->insert(['name' => $department]);
            }
        }
    }
