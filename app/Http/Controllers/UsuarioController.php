<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\HttpException;
use App\Models\User;

class UsuarioController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->get('page', '1');
        $pageSize = $request->get('pageSize', '5');
        $dir = $request->get('dir', 'asc');
        $props = $request->get('props', 'id');
        $search = $request->get('search', '');


        $query = User::select("*")
            ->whereNull("deleted_at")
            ->OrderBy($props, $dir);

        $total = $query->count();

        $data = $query->offset( ($page - 1) * $pageSize)
            ->limit($pageSize)
            ->get();

        $totalPages = ceil($total / $pageSize);


        return response()->json([
            'message'=>'Relatorio de usuários',
            'status'=>200,
            'page'=>$page,
            'pageSize'=>$pageSize,
            'dir'=>$dir,
            'props'=>$props,
            'search'=>$search,
            'total'=>$total,
            'totalPages'=>$totalPages,
            'data'=>$data
        ],200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:255',
            'username'=>'sometimes|required|string|max:255|unique:users,username',
            'email'=>'required|email|string|max:255|unique:users,email',
            'birth_date'=>'sometimes|nullable|date',
            'password'=>'sometimes|required|string|min:6',
            'bios'=>'sometimes|nullable|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message'=>'Erro nas informações do usuário',
                'status'=>404,
                'errors'=>$validator->errors()
            ],404);
        }

        $data = User::create([
            'name'=>$request->name,
            'username'=>$request->username,
            'email'=>$request->email,
            'bios'=>$request->bios,
            'birth_date'=>$request->birth_date,
            'password'=>Hash::make($request->password)
        ]);

        return response()->json([
            'message'=>'Usuário cadastrado com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);
    }

    public function show(Request $request, string $id)
    {
        try{
            $data = User::findOrfail($id);
        } catch (HttpResponseException $e) {
            response()->json([
                'message'=>$e->getMessage(),
                'status'=>404
            ],404);
        }
        
        return response()->json([
            'message'=>'Usuário encontrado com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:255',
            'username'=>'sometimes|required|string|max:255|unique:users,username',
            'email'=>'required|email|string|max:255|unique:users,email',
            'birth_date'=>'sometimes|nullable|date',
            'password'=>'sometimes|required|string|min:6',
            'bios'=>'sometimes|nullable|string|max:255'
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'message'=>'Erro nas informações do usuário',
                'status'=>404,
                'errors'=>$validator->errors()
            ],404);
        }
        // pega o id do usuário no banco de dados
        $data = User::Find($id);
        // verifica se o usuário existe
        if (!$data) {
            return response()->json([
                'message'=>'Usuário não localizado',
                'data'=>$id,
                'status'=>404
            ],404);
        }

        $data->name = $request->name ?? $data->name;
        $data->email = $request->email ?? $data->email;
        $data->username = $username ?? $data->username;
        $data->birth_date = $request->birth_date ?? $data->birth_date;
        $data->bios = $request->bios ?? $data->bios;

        if ($request->has('password')) {
            $data->password = Hash::make($request->password);
        }

        $data->save();

        return response()->json([
            'message'=>'Usuário alterado com sucesso',
            'status'=>201,
            'data'=>$data
        ],200);
    }

    public function destroy(Request $request, string $id)
    {
        $data = User::find($id);

        if (!$data) {
            return response()->json([
                'message'=>'Usuário não encontrado',
                'status'=>404
            ],404);
        }

        $data->delete();

        return response()->json([
            'message'=>'Usuário deletado com sucesso',
            'status'=>200
        ],200);
    }
}
