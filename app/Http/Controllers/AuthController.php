<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function user_register(UserRegisterRequest $request){ 
         $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'role' => 'required|string',
        'phone' => 'required|string',
        'street_address' => 'required|string',
        'city' => 'required|string',
        'region' => 'required|string',
        'vehicle_name' => 'required|string',
        'vehicle_model' => 'required|string',
        'vehicle_year' => 'required|integer|min:1900|max:' . date('Y'),
        'license_plate' => 'required|string|unique:users',
        'vehicle_type' => 'required|string',
        'username' => 'required|string|unique:users,username',
        'password' => 'required|min:6|confirmed',
    ]);

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'role' => $request->role,
        'phone' => $request->phone,
        'street_address' => $request->street_address,
        'city' => $request->city,
        'region' => $request->region,
        'vehicle_name' => $request->vehicle_name,
        'vehicle_model' => $request->vehicle_model,
        'vehicle_year' => $request->vehicle_year,
        'license_plate' => $request->license_plate,
        'vehicle_type' => $request->vehicle_type,
        'username' => $request->username,
        'password' => Hash::make($request->password),
    ]);

    return response()->json(['message' => 'User registered successfully', 'user' => $user], 201);
}

//get the user service
public function getUserServices($plate)
{
    $services = User::where('license_plate', $plate)->get();

    if ($services->isEmpty()) {
        return response()->json(['message' => 'No services for the user.'], 404);
    }

    return response()->json($services, 200);
}
    
}
