<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    //
    public function index(){
        $user = User::find(auth()->id());
        $preferences = $user->preferences;
        return [ 
            $preferences
        ];
    }
}
