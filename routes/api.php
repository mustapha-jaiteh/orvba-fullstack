<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MechanicController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\BookingController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/user_register', [AuthController::class, 'user_register']);
Route::post('/mechanic_register', [MechanicController::class, 'mechanic_register']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/booking', [BookingController::class, 'store']);


// Route::post('/booking', [BookingController::class, 'booking']);