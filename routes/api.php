<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::prefix('user')->group(function () {
    Route::get('/index', [UsuarioController::class, 'index']);
    Route::get('/show/{id}', [UsuarioController::class, 'show']);

    Route::post('/store', [UsuarioController::class, 'store']);

    Route::put('/update/{id}', [UsuarioController::class, 'update']);
    
    Route::delete('/destroy/{id}', [UsuarioController::class, 'destroy']);
});