<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('muatan', function (Blueprint $table) {
            $table->id();
            $table->string('jenis_muatan');
            $table->integer('berat_muatan');
            $table->integer('beban_seluruh');
            $table->unsignedBigInteger('id_user');
            $table->unsignedBigInteger('id_truck');
            $table->timestamps();

            $table->foreign('id_user')->references('id')->on('users');
            $table->foreign('id_truck')->references('id')->on('trucks');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('muatan');
    }
};
