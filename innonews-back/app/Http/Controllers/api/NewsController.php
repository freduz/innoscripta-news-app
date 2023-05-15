<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Location;

class NewsController extends Controller
{
    private $API_KEY;
    function __construct() {
        $this->API_KEY = env("NEWS_API_KEY");
    }

    public function getEverything(Request $request){
        $API_KEY=env("NEWS_API_KEY");
        $response = Http::get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=$this->API_KEY");
        $data = $response->json();
        return [
            $data
        ];
    }

    public function getHeadlines(Request $request){
        $currentIp = $request->ip();
        $userCountryInfo = Location::get($currentIp);
        return [
            $currentIp,
            $userCountryInfo];
    }

   
    public function searchNews(Request $request){
        $searchTerm = $request->query('q');
        $news = Http::get("https://newsapi.org/v2/everything?q=$searchTerm&apiKey=$this->API_KEY");
        return response($news->json(),201);
    }

   
}
