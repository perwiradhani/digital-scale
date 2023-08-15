<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Truck;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\TrucksResource;

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
                // 'password' => 'required',
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
            // 'password' => Hash::make($request->password),
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
        $tableName = 'muatans';
        $muatan = DB::table($tableName)->where('status', 'Sudah Verifikasi')->count();
        return response()->json($muatan, 200);
    }

    public function getMuatanCount()
    {
        // $truck = Truck::all()->count();
        // $truck = Truck::count();
        // return response()->json($truck, 200);
        $tableName = 'muatans';
        $count = DB::table($tableName)->count();

        return response()->json($count, 200);
    }

    public function getValid()
    {
        $tableName = 'muatans';
        $muatan = DB::table($tableName)->where('status', 'Sudah Approve')->count();
        return response()->json($muatan, 200);
    }

    public function getDropdown()
    {
        // $options = DB::table('trucks')->pluck('plat_nomor', 'id');
        // select option from model Truck with pluck
        // $options = Truck::pluck('plat_nomor', 'id');
        $options = Truck::select('plat_nomor', 'id')->get();
        
        // return response()->json(['options' => $options]);
        return TrucksResource::collection($options);
    }

    public function getMonth()
    {
        // $results = DB::table('muatans')
        //      ->select(DB::raw('MONTHNAME(waktu) as month'))
        //      ->get();
        // return response()->json([
        //     'results' => $results
        // ], 200);

        $data = DB::table('muatans')
        ->select(DB::raw('MONTHNAME(waktu) as month'), DB::raw('COUNT(plat) as total'))
        ->groupBy(DB::raw('MONTHNAME(waktu)'))
        ->get();

    return response()->json($data);
    }

    public function updatePw(Request $request, $id)
    {
        $request->validate(
            [
                'password' => 'required'
            ]
        );

        $user = User::find($id);
        $user->update([
            'password' => Hash::make($request->password)
        ]);

        return response()->json([
            'user' => $user,
            'message' => 'Password updated'
        ], 200);
    }


}
