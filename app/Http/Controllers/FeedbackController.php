<?php

namespace App\Http\Controllers;

 use App\Models\Feedback;
 use App\Models\Service;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
   
// use Illuminate\Http\Request;

public function store(Request $request)
{
    $request->validate([
        'service_id' => 'required|exists:services,id',
        'license_plate' => 'required|string',
        'message' => 'required|string',
       
    ]);

    $feedback = Feedback::create($request->all());

    return response()->json(['message' => 'Feedback submitted successfully!', 'data' => $feedback]);
}

}
