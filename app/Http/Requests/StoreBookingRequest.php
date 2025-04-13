<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookingRequest extends FormRequest
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
        'email' => 'required|email',
        'phone' => 'required|string',
        'city' => 'required|string',
        'issue_description' => 'required|string',
        'date' => 'required|date',
        ];
    }
}
