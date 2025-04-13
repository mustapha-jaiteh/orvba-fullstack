<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Mechanic as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; // ✅ Import HasApiTokens


class Mechanic extends Model
{
     /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, HasApiTokens, Notifiable;
     /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
       protected $fillable = [
        'profile_image',
        'name',
        'email',
        'role',
        'phone',
        'street_address',
        'city',
        'region' ,
        'mechanic_license',
        'years_of_experience',
        'specialization',
        'username',
         'password'     

    ];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
