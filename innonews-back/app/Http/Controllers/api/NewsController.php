<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class NewsController extends Controller
{
    //

    public function getEverything(Request $request){
        $API_KEY=env("NEWS_API_KEY");
        $response = Http::get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=$API_KEY");
        $data = $response->json();
        return [
            $data
        ];
    }

   
}
