<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Preference;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PreferenceController extends Controller
{
  
   
    public function update(Request $request)
    {
        $fields = $request->validate([
            'sources' => 'array',
            'categories' => 'array',
            'authors' => 'array',
        ]);

    $dataObj = [];
    foreach($fields as $key => $value){
       $dataObj[$key] = implode(',',$fields[$key]);
    }
    $dataObj['user_id'] = auth()->id(); 
    $pref = Preference::where('user_id',auth()->id())->update($dataObj);

        return response($pref,201);
    }

    public function index(){
        $user = User::find(auth()->id());  
        $preferences = [
            'sources' => explode(',',$user->preferences['sources']),
            'categories' => explode(',',$user->preferences['categories']),
            'authors' => explode(',',$user->preferences['authors']),

        ];
        return $preferences;
    }

    // public function update(Request $request, $preference){
        
    // }

    
}
