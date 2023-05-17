<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Location;

class NewsController extends Controller
{
    private $API_KEY_NEWS_ORG;
    private $API_KEY_NEWS_IO;
    function __construct() {
        $this->API_KEY_NEWS_ORG = env("NEWS_API_KEY");
        $this->API_KEY_NEWS_IO = env("NEWS_API_IO_KEY");
    }

    public function getEverything(Request $request){
        $API_KEY=env("NEWS_API_KEY");
        $response = Http::get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=$this->API_KEY_NEWS_ORG");
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
        $pageSize =  $request->query('pageSize');
        $news = Http::get("https://newsapi.org/v2/everything?q=$searchTerm&apiKey=$this->API_KEY_NEWS_ORG&pageSize=$pageSize")->json();
        return response($news['articles'],201);
    }

    private function makeHomeFeed($keyword,$preference=[]){
        $news = [];
        if(!empty($preference)){
            $news = Http::get('http://eventregistry.org/api/v1/article/getArticles',[
                'apiKey' => $this->API_KEY_NEWS_IO,
                'keyword' => $keyword,
                'categoryUri' => explode(',',$preference['categories'] ?? null),
                'sourceUri' => explode(',',$preference['sources'] ?? null),
                'authorUri' => explode(',',$preference['authors'] ?? null),
                'articlesCount' => 100
            ])->json();
        }else{
            $news = Http::get('http://eventregistry.org/api/v1/article/getArticles',[
                'apiKey' => $this->API_KEY_NEWS_IO,
                'keyword' => $keyword,
                'articlesCount' => 100
            ])->json();
        }
        

        return $news['articles']['results'];
    }

    public function getCustomNewsFeed(Request $request){
        $user = User::find(auth()->id());
        $preference = $user->preferences;
        $latestNews = $this->makeHomeFeed('latest',$preference);
        $randomPicks = $this->makeHomeFeed('random',$preference);
        $trending = $this->makeHomeFeed('trending',$preference);
        $finalFeed = [
            'latestNews' => $latestNews,
            'randomPicks' => $randomPicks,
            'trending' => $trending
        ];

        return response($finalFeed);
    }


    public function getSources(Request $request){
       $sources = $this->getData($request->query('term'),'http://eventregistry.org/api/v1/suggestSourcesFast');
       return response($this->formateJsonResponse('title',$sources),200);
    }

    public function getCategories(Request $request){
        $categories = $this->getData($request->query('term'),'http://eventregistry.org/api/v1/suggestCategoriesFast');
        return response($this->formateJsonResponse('label',$categories),200);
    }

    public function getAuthors(Request $request){
        $authors = $this->getData($request->query('term'),'http://eventregistry.org/api/v1/suggestAuthorsFast');
        return response($this->formateJsonResponse('name',$authors),200);
    }

    private function getData($searchTerm,$uri){
        $sources = Http::get($uri,[
            'apiKey' => $this->API_KEY_NEWS_IO,
            'prefix' => $searchTerm
        ]);
        return $sources->json();
    }

    private function formateJsonResponse($key,$data){
            $transformedData = [];
            foreach($data as $item){
                array_push($transformedData,[
                    'cat' => $item['uri'],
                    'key' => $item[$key]
                ]);
             
            }
            return $transformedData;
    }

    public function getCommonFeeds(Request $request){
        $latestNews = $this->makeHomeFeed('latest');
        $randomPicks = $this->makeHomeFeed('random');
        $trending = $this->makeHomeFeed('trending');
        $finalFeed = [
            'latestNews' => $latestNews,
            'randomPicks' => $randomPicks,
            'trending' => $trending
        ];

        return response($finalFeed);
    }


   
   
}
