<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TruckController;
// use App\Http\Middleware\Authenticate;
use App\Http\Controllers\AuthenticationController;
use PHPUnit\Framework\Attributes\Group;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::middleware(['auth:sanctum'])->group(function () {
//     Route::post('/truck', [TruckController::class, 'store']);
//     Route::put('/truck/{id}', [TruckController::class, 'update']);
//     Route::delete('/truck/{id}', [TruckController::class, 'destroy']);
//     Route::get('/logout', [AuthenticationController::class, 'logout']);
//     Route::get('/user', [AuthenticationController::class, 'user']);
//     Route::put('/user/{id}', [AuthenticationController::class, 'update']);
//     Route::delete('/user/{id}', [AuthenticationController::class, 'destroy']);
// });

Route::get('/truck', [TruckController::class, 'index']);
Route::get('/truck/{id}', [TruckController::class, 'show']);
Route::post('/truck', [TruckController::class, 'store']);
Route::put('/truck/{id}', [TruckController::class, 'update']);
Route::delete('/truck/{id}', [TruckController::class, 'destroy']);


Route::post('/login', [AuthenticationController::class, 'login']);
Route::post('/register', [AuthenticationController::class, 'register']);
Route::get('/users', [AuthenticationController::class, 'index']);
Route::get('/logout', [AuthenticationController::class, 'logout']);
Route::get('/user/{id}', [AuthenticationController::class, 'user']);
Route::put('/user/{id}', [AuthenticationController::class, 'update']);
Route::delete('/user/{id}', [AuthenticationController::class, 'destroy']);
