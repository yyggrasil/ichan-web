<?php

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ComunidadeController;
use App\Http\Controllers\Api\LoginController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [LoginController::class, 'login']);


Route::prefix('user')->group(function () {
    Route::get('/index', [UsuarioController::class, 'index']);
    Route::get('/show/{id}', [UsuarioController::class, 'show']);

    Route::post('/store', [UsuarioController::class, 'store']);

    Route::put('/update/{id}', [UsuarioController::class, 'update']);
    
    Route::delete('/destroy/{id}', [UsuarioController::class, 'destroy']);
});

Route::prefix('comunidade')->group(function () {
    Route::get('/index', [ComunidadeController::class, 'index']);
    Route::get('/show/{id}', [ComunidadeController::class, 'show']);

    Route::post('/store', [ComunidadeController::class, 'store']);

    Route::put('/update/{id}',   [ComunidadeController::class, 'update']);
    
    Route::delete('/destroy/{id}', [ComunidadeController::class, 'destroy']);
});