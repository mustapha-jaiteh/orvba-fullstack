<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
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
              'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'role' => 'required|string',
            'phone' => 'required|string',
            'street_address' => 'required|string',
             'city' => 'required|string',
            'region' => 'required|string',
            'vehicle_name' => 'required|string',
            'vehicle_model' => 'required|string',
            'vehicle_year' => 'required|string',
            'license_plate' => 'required|string',
            'vehicle_type' => 'required|string',
            'username' => 'required|string',
            'password' => 'required|string|min:6|confirmed',
            
        ];
    }
}
