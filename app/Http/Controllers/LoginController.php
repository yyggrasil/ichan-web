<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request){
        $email = $request->email;
        $password = $request->password;
        $user = User::where('email', $email )->first();

        if (!$user){
            return response()->json([
                'message'=>'Email não encontrado',
            ]);
        }

        if (!Hash::check($password, $user->password)){
            return response()->json([
                'message'=>'Senha do usuário inválida',
            ]);
        }

        $token = $user->createToken($user->nome)->plainTextToken;

        return response()->json([
            'user'=>$user,
            'token'=>$token,
        ]);
    }

    public function logout(Request $request){
        $email = $request->email;
        $user = User::where('email', $email )->first();
        $user->tokens()->delete();

        return response()->json([
            'message'=>'Logout realizado com sucesso!',
        ], 204);
    }
}