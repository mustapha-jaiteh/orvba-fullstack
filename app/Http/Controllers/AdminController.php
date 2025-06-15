<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\Mechanic;
use App\Models\Booking;
use App\Models\Service;
use App\Models\Payment;
use App\Models\Feedback;


class AdminController extends Controller
{
 
    //get the list of users
    public function getUsers()
    {
        return response()->json(User::all());
    }
   //get the list of mechanics
    public function getMechanics()
    {
        return response()->json(Mechanic::all());
    }
    //get the list of bookings 
    public function getBookings()
    {
        return response()->json(Booking::all());
    }
     //get the list of services 
    public function getServices()
    {
        return response()->json(Service::all());
    }
      //get all feedback 
    public function getFeedback()
    {
        return response()->json(Feedback::all());
    }

        public function assignBooking(Request $request)
    {
        $booking = Booking::find($request->booking_id);
        if ($booking) {
            $booking->mechanic_id = $request->mechanic_id;
            $booking->status = 'Assigned';
            $booking->save();
            return response()->json(['message' => 'Booking assigned']);
        }
        return response()->json(['message' => 'Booking not found'], 404);
    }


}
