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

//assign mechanic to booking 

public function assignMechanic(Request $request, $id)
{
    $request->validate([
        'mechanic_license' => 'required|string',
        'mechanic_name' => 'required|string',
    ]);

    $booking = Booking::findOrFail($id);
    $booking->update([
        'mechanic_license' => $request->mechanic_license,
        'mechanic_name' => $request->mechanic_name,
        'assigned' => true,
    ]);

    return response()->json(['message' => 'Booking assigned to mechanic successfully']);
}

}
