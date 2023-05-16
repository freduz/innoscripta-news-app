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
    $pref= Preference::updateOrCreate(
        ['user_id' => $dataObj['user_id']],
        $dataObj
    );
    

        return response($pref,201);
    }

    public function index(){
        $user = User::find(auth()->id());
        $preferences = [];  
        if(!empty($user->preferences)){
        $preferences = [
            'sources' => $this->formateJsonResponse(explode(',',$user->preferences['sources'])),
            'categories' => $this->formateJsonResponse(explode(',',$user->preferences['categories'])),
            'authors' => $this->formateJsonResponse(explode(',',$user->preferences['authors'])),

        ];
    }
        return $preferences;
    }

    private function formateJsonResponse($data){
        $transformedData = [];
        if(!empty($data)){
        foreach($data as $item){
            array_push($transformedData,[
                'cat' => $item,
                'key' => $item
            ]);
         
        }
    }
        return $transformedData;
}

    
}
