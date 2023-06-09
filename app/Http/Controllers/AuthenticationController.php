<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\DB;

class AuthenticationController extends Controller
{
        /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::all();
        return UserResource::collection($user);
    }

    public function login(Request $request)
    {
        $request->validate(
            [
                'username' => 'required',
                'password' => 'required'
            ]
        );
        
        $user = User::where('username', $request->username)->first();

        if (!$user || ! Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'The provided credentials are incorrect.'
            ], 401);
        }

        $token = $user->createToken($request->username)->plainTextToken;
        return response()->json([
            'token' => $token,
            'user' => $user
        ], 200);    
    }

    public function logout(Request $request)
    {
        // $request->user()->currentAccessToken()->delete();
        $request->user()->tokens()->delete();
        return response()->json([
            'message' => 'Logged out'
        ], 200);
    }

    public function user($id)
    {
        // return response()->json(Auth::user());
        $user = User::find($id);
        return new UserResource($user);

    }

    public function register(Request $request)
    {
        $request->validate(
            [
                'username' => 'required',
                'password' => 'required',
                'nama_user' => 'required',
                'role' => 'required'
            ]
        );

        $user = User::create([
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'nama_user' => $request->nama_user,
            'role' => $request->role
        ]);

        // $token = $user->createToken($request->username)->plainTextToken;
        // return response()->json([
        //     'token' => $token,
        //     'user' => $user
        // ], 200);

        return response()->json([
            'user' => $user,
            'message' => 'User created'
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $request->validate(
            [
                'username' => 'required',
                'password' => 'required',
                'nama_user' => 'required',
                'role' => 'required'
            ]
        );

        $user = User::find($id);
        // $user->update($request->all());
        // $user->username = $request->username;
        // $user->password = Hash::make($request->password);
        // $user->nama_user = $request->nama_user;
        // $user->role = $request->role;
        // $user->save();

        $user->update([
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'nama_user' => $request->nama_user,
            'role' => $request->role
        ]);

        return response()->json([
            'user' => $user,
            'message' => 'User updated'
        ], 200);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json([
            'message' => 'User deleted'
        ], 200);
    }

    public function show(Request $request)
    {
        $user = $request->user();
        return response()->json($user, 200);
    }

    public function getUserCount()
    {
        $user = User::all()->count();
        return response()->json($user, 200);
    }

    public function getTruckCount()
    {
        // $truck = Truck::all()->count();
        // $truck = Truck::count();
        // return response()->json($truck, 200);
        $tableName = 'trucks';
        $count = DB::table($tableName)->count();

        return response()->json($count, 200);
    }
}
