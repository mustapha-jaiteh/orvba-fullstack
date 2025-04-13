<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MechanicRegisterRequest extends FormRequest
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
        ];
    }
}
