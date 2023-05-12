<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\NewsController;
use App\Http\Controllers\api\PreferenceController;

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


Route::get('news/everything',[NewsController::class,'getEverything']);

Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::post('logout',[AuthController::class,'logout']);
        Route::get('users',[UserController::class,'index']);
        Route::resource('preference',PreferenceController::class);
    });

