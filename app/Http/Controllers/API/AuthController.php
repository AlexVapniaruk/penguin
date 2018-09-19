<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\User;

class AuthController extends Controller
{

    public function register(Request $request)
    {

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'email|required|string|unique:users|max:255',
            'password' => 'required|string|min:6|max:255',
        ], [
                'unique' => 'Email must be unique',
                'email' => 'Email address not valid.',
                'required' => 'This field must be required']
        );

        User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => bcrypt(request('password'))
        ]);


        return response()->json(['status' => 201]);
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'email|required|string|max:255',
            'password' => 'required|string|min:6|max:255',
        ], [
                'unique' => 'Email must be unique',
                'email' => 'Email address not valid.',
                'required' => 'This field must be required']
        );

        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();

        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => request('email'),
            'password' => request('password'),
        ];

        $request = Request::create('/oauth/token', 'POST', $data);
        return app()->handle($request);
    }

    public function logout()
    {
        $accessToken = auth()->user()->token();

        $refreshToken = DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);

        $accessToken->revoke();

        return response()->json(['status' => 200]);
    }
}
