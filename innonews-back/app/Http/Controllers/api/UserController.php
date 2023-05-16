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
        $formattedData = [
            "sources" => $this->formateJsonResponse($preferences['sources']),
            "categories" => $this->formateJsonResponse($preferences['categories']),
            "authors" => $this->formateJsonResponse($preferences['authors'])
        ];

        return [ 
            $formattedData
        ];
    }

    private function formateJsonResponse($data){
        $transformedData = [];
        foreach($data as $item){
            array_push($transformedData,[
                'cat' => $item,
                'key' => $item
            ]);
         
        }
        return $transformedData;
}
}
