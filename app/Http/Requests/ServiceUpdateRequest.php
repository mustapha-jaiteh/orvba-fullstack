<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ServiceUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
             'vehicle_name' => 'required|string|max:255',
        'license_plate' => 'required|string|max:255',
        'vehicle_owner' => 'required|string|max:255',
         'mechanic_name' => 'required',
        'mechanic_license' => 'required',
        'mechanic_phone' => 'required',
        'mechanic_location' => 'required',
        'issue_description' => 'required|string',
         'request_date' => 'required|date',
         'status' => 'required',
        'payment_status' => 'required',
        'charges' => 'required|numeric',
        'payment_receipt' => 'nullable|string',
        'paid_date' => 'nullable|date',
        
        ];
    }
}
