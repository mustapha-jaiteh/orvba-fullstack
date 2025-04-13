<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use App\Http\Requests\StoreBookingRequest;

class BookingController extends Controller
{
    public function store(StoreBookingRequest $request)
{
    $booking = Booking::create($request->validated());

    return response()->json([
        'message' => 'Booking created successfully!',
        'data' => $booking
    ]);
}
}
