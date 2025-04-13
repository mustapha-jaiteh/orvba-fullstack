<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Mechanic;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|min:6',
        ]);

        // 🔹 Check Users Table First
        $user = User::where('username', $request->username)->first();
        if ($user && Hash::check($request->password, $user->password)) {
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json(['message' => 'User logged in successfully',
                'user' => $user,
                 'role' => $user->role,
                'token' => $token
            ], 200);
        }

        // 🔹 Check Mechanics Table
        $mechanic = Mechanic::where('username', $request->username)->first();
        if ($mechanic && Hash::check($request->password, $mechanic->password)) {
            $token = $mechanic->createToken('auth_token')->plainTextToken;
            return response()->json([
                'message' => 'Mechanic logged in successfully',
                'mechanic' => $mechanic,
                 'role' => $mechanic->role,
                'token' => $token
            ], 200);
        }

        // 🔴 If no user or mechanic found
        return response()->json(['message' => 'Invalid credentials'], 401);
    }
}
