<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\MechanicController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\FeedbackController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/user_register', [AuthController::class, 'user_register']);
Route::post('/mechanic_register', [MechanicController::class, 'mechanic_register']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/booking', [BookingController::class, 'store']);
//admin login
Route::post('/admin-login', function (Request $request) {
    $email = env('ADMIN_EMAIL');
    $password = env('ADMIN_PASSWORD');

    if ($request->email === $email && $request->password === $password) {
        return response()->json(['message' => 'Login successful', 'status' => true], 200);
    }

    return response()->json(['message' => 'Invalid credentials', 'status' => false], 401);
});
//admin logout
Route::middleware('auth:sanctum')->post('/admin/logout', function (Request $request) {
    $request->user()->currentAccessToken()->delete();

    return response()->json(['message' => 'Logged out successfully']);
});

//admin dashboard data
 Route::get('/admin/users', [AdminController::class, 'getUsers']);
    Route::get('/admin/mechanics', [AdminController::class, 'getMechanics']);
    Route::get('/admin/bookings', [AdminController::class, 'getBookings']);
    Route::get('/admin/services', [AdminController::class, 'getServices']);
     Route::get('/admin/feedbacks', [AdminController::class, 'getFeedback']);
    // routes/api.php

Route::put('/admin/assign-mechanic/{id}', [BookingController::class, 'assignMechanic']);

//admin logout
Route::post('/admin/logout', function () {
    // For session-based logout
    Auth::guard('web')->logout();
    return response()->json(['message' => 'Logged out successfully']);
});

// mechanic routes
Route::get('/mechanic/bookings/{license}', [MechanicController::class, 'getAssignedBookings']);
Route::post('/mechanic/service-update', [MechanicController::class, 'updateService']);
Route::get('/mechanic/services/{license}', [MechanicController::class, 'getMechanicServices']);

//user routes
Route::get('/user/services/{plate}', [AuthController::class, 'getUserServices']);
//user sends service feedback
Route::post('/feedback', [FeedbackController::class, 'store']);



