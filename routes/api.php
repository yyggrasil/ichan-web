<?php

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ComunidadeController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\CategoriaDaComunidadeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ComentarioController;
use App\Http\Controllers\FollowController;

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

Route::prefix('categoria')->group(function () {
    Route::get('/index', [CategoriaController::class, 'index']);
    Route::get('/show/{id}', [CategoriaController::class, 'show']);

    Route::post('/store', [CategoriaController::class, 'store']);

    Route::put('/update/{id}', [CategoriaController::class, 'update']);
    
    Route::delete('/destroy/{id}', [CategoriaController::class, 'destroy']);
});

Route::prefix('categoria-da-comunidade')->group(function () {
    Route::get('/index', [CategoriaDaComunidadeController::class, 'index']);
    Route::get('/show/{id}', [CategoriaDaComunidadeController::class, 'show']);

    Route::post('/store', [CategoriaDaComunidadeController::class, 'store']);

    Route::put('/update/{id}',   [CategoriaDaComunidadeController::class, 'update']);
    
    Route::delete('/destroy/{id}', [CategoriaDaComunidadeController::class, 'destroy']);
});

Route::prefix('post')->group(function () {
    Route::get('/index', [PostController::class, 'index']);
    Route::get('/show/{id}', [PostController::class, 'show']);

    Route::post('/store', [PostController::class, 'store']);

    Route::put('/update/{id}',   [PostController::class, 'update']);
    
    Route::delete('/destroy/{id}', [PostController::class, 'destroy']);
});

Route::prefix('comentario')->group(function () {
    Route::get('/index', [ComentarioController::class, 'index']);
    Route::get('/show/{id}', [ComentarioController::class, 'show']);

    Route::post('/store', [ComentarioController::class, 'store']);

    Route::put('/update/{id}',   [ComentarioController::class, 'update']);
    
    Route::delete('/destroy/{id}', [ComentarioController::class, 'destroy']);
});

Route::prefix('follow')->group(function () {
    Route::get('/index', [FollowController::class, 'index']);
    Route::get('/show/{id}', [FollowController::class, 'show']);

    Route::post('/store', [FollowController::class, 'store']);

    Route::put('/update/{id}',   [FollowController::class, 'update']);
    
    Route::delete('/destroy/{id}', [FollowController::class, 'destroy']);
});