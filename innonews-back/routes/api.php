<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\NewsController;
use App\Http\Controllers\api\PreferenceController;
use App\Http\Controllers\api\SettingsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


//public auth routes
Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//public route for news
Route::controller(NewsController::class)->group(function(){
    Route::get('news/everything','getEverything');
    Route::get('news/headlines','getHeadlines');
    Route::get('news/search','searchNews');
    Route::get('news/sources','getSources');
    Route::get('news/categories','getCategories');
    Route::get('news/authors','getAuthors');
    Route::get('news/feed/common','getCommonFeeds');
   
});



Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::post('logout',[AuthController::class,'logout']);
        Route::resource('preference',PreferenceController::class);
        Route::get('news/feed',[NewsController::class,'getCustomNewsFeed']);
    });

