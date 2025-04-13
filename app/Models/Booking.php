<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
     protected $fillable = [
        'vehicle_name',
        'license_plate',
        'vehicle_owner',
        'email',
        'phone',
        'city',
        'issue_description',
        'date',
    ];
}
