<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Preference;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PreferenceController extends Controller
{
  
   
    public function store(Request $request)
    {
        $fields = $request->validate([
            'preferences' => 'required|string|unique:preferences,preference'
        ]);

        $dataBuilder = [];
        $preferences = explode(',',$fields['preferences']);
        foreach($preferences as $preference){
            array_push($dataBuilder,[
                'user_id' => auth()->id(),
                "preference" => $preference
            
            ]);
        }

        DB::table('preferences')->insert($dataBuilder);

        return response($dataBuilder,201);
    }

    
}
