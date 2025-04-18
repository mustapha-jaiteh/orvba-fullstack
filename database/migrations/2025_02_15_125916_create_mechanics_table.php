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
        Schema::create('mechanics', function (Blueprint $table) {
             $table->id();
              $table->string('profile_image');
            $table->string('name');
            $table->string('email')->unique();
            // $table->timestamp('email_verified_at')->nullable();
             $table->string('role');
              $table->string('phone');
            $table->string('street_address');
            $table->string('city');
            $table->string('region');
            $table->string('mechanic_license');
            $table->string('years_of_experience');
            $table->integer('specialization');
             $table->string('username');
            $table->string('password');
            
            $table->rememberToken();
            $table->timestamps();
          
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mechanics');
    }
};
