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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->string('vehicle_name');
        $table->string('license_plate');
        $table->string('vehicle_owner');
        $table->string('email');
        $table->string('phone');
        $table->string('city');
        $table->text('issue_description');
        $table->date('date');
$table->foreign('license_plate')->references('license_plate')->on('users')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};

