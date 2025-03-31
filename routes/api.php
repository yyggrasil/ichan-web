<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsuarioControler;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::prefix('user')->group(function () {
    Route::get('/index', [UsuarioControler::class, 'index']);
    Route::get('/show/{id}', [UsuarioControler::class, 'show']);

    Route::post('/store', [UsuarioControler::class, 'store']);

    Route::put('/update/{id}', [UsuarioControler::class, 'update']);
    
    Route::delete('/destroy/{id}', [UsuarioControler::class, 'destroy']);
});