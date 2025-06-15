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
        Schema::table('bookings', function (Blueprint $table) {
             $table->string('mechanic_license')->nullable();
        $table->string('mechanic_name')->nullable();
        $table->boolean('assigned')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('bookings', function (Blueprint $table) {
             Schema::table('bookings', function (Blueprint $table) {
            $table->dropColumn(['mechanic_license', 'mechanic_name', 'assigned']);
        });
        });
    }
};
