<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsuarioControler;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/user/index', [UsuarioControler::class, 'index']);
Route::get('/user/show/{id}', [UsuarioControler::class, 'show']);

Route::post('/user/store', [UsuarioControler::class, 'store']);

Route::delete('/user/destroy/{id}', [UsuarioControler::class, 'destroy']);