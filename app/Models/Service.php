<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
      protected $fillable = [
        'booking_id',
        'license_plate',
        'vehicle_name',
        'vehicle_owner',
        'mechanic_name',
        'mechanic_license',
        'mechanic_phone',
        'mechanic_location',
        'request_date',
        'issue_description',
        'status',
        'payment_status',
        'paid_date',
        'payment_receipt',
        'charges',
    ];
}
