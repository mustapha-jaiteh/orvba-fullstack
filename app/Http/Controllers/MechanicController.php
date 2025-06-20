<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\Mechanic;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Booking;
use App\Models\Service;


class MechanicController extends Controller
{
    public function mechanic_register(Request $request)
{
     $validator = Validator::make($request->all(),[
        'profile_image' => 'required|image|mimes:jpg,png,jpeg|max:2048',
        'name' => 'required|string',
        'email' => 'required|email|unique:mechanics',
        'role' => 'required|string',
        'phone' => 'required|string',
        'street_address' => 'required|string',
        'city' => 'required|string',
        'region' => 'required|string',
        'mechanic_license' => 'required|unique:mechanics',
        'years_of_experience' => 'required|string',
        'specialization' => 'required|string',
        'username' => 'required|string',
        'password' => 'required|string|min:6|confirmed',
      
    ]);
      if ($validator->fails()) {
        return response()->json([
            'message' => 'Validation failed',
            'errors' => $validator->errors()
        ], 422);
    }

    // Handle Image Upload
    if ($request->hasFile('profile_image')) {
        $imagePath = $request->file('profile_image')->store('mechanic_profiles', 'public');
    } else {
        $imagePath = null;
    }

    $mechanic = Mechanic::create([
         'profile_image' => $imagePath, // Store the image path in DB
        'name' => $request->name,
        'email' => $request->email,
        'role' => $request->role,
        'phone' => $request->phone,
        'street_address' => $request->street_address,
        'city' => $request->city,
        'region' => $request->region,
        'mechanic_license' => $request->mechanic_license,
        'years_of_experience' => $request->years_of_experience,
         'specialization' => $request->specialization,
         'username' => $request->username,
        'password' => bcrypt($request->password),
       
    ]);

    return response()->json(['message' => 'Mechanic registered successfully', 'mechanic' => $mechanic], 201);
}
//get the assigned bookings
public function getAssignedBookings($license)
{
    $bookings = Booking::where('mechanic_license', $license)->get();

    if ($bookings->isEmpty()) {
        return response()->json(['message' => 'No bookings assigned.'], 404);
    }

    return response()->json($bookings, 200);
}

 // update service
public function updateService(Request $request)
{
    $validated = $request->validate([
        'booking_id' => 'required|integer',
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
         'payment_receipt' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
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

//get mechanic services
public function getMechanicServices($license)
{
    $services = Service::where('mechanic_license', $license)->get();

    if ($services->isEmpty()) {
        return response()->json(['message' => 'No services for the mechanic.'], 404);
    }

    return response()->json($services, 200);
}

}
