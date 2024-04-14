<?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    class AddDepartmentIdToContactsTable extends Migration
    {
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up()
        {
            Schema::table('contacts', function (Blueprint $table) {
                $table->foreign('department_id')->references('id')->on('departments')->onDelete('cascade');
            });
        }

        public function down()
        {
            Schema::table('contacts', function (Blueprint $table) {
                $table->dropForeign(['department_id']);
                $table->dropColumn('department_id');
            });
        }
    }
