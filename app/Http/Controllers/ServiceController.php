<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\Booking;

class SericeController extends Controller
{
   // update service
public function updateService(Request $request)
{
    $validated = $request->validate([
        'bookings_id' => 'required|integer',
        'license_plate' => 'required|string',
        'vehicle_name' => 'required|string',
        'vehicle_owner' => 'required|string',
        'mechanic_name' => 'required|string',
        'mechanic_license' => 'required|string',
        'mechanic_phone' => 'required|string',
        'mechanic_location' => 'required|string',
        'request_date' => 'required|date',
        'issue_description' => 'required|string',
        'status' => 'required|string',
        'charges' => 'nullable|numeric',
        'payment_status' => 'nullable|string',
        'paid_date' => 'nullable|date',
        'payment_receipt' => 'nullable|image|max:2048',
    ]);

    if ($request->hasFile('payment_receipt')) {
        $filename = time() . '_' . $request->file('payment_receipt')->getClientOriginalName();
        $path = $request->file('payment_receipt')->storeAs('receipts', $filename, 'public');
        $validated['payment_receipt'] = $path;
    }

    $service = Service::create($validated); // assuming Service model

    return response()->json([
        'message' => 'Service updated successfully',
        'data' => $service
    ]);
}


}
