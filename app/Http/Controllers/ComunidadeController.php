<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\HttpResponseException;
use App\Models\Comunidade;

class ComunidadeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $page = $request->get('page', '1');
        $pageSize = $request->get('pageSize', '5');
        $dir = $request->get('dir', 'asc');
        $props = $request->get('props', 'id');
        $search = $request->get('search', '');
        
        $query = Comunidade::select('id', 'name','description')
            ->whereNull("deleted_at")
            ->OrderBy($props, $dir);

        $total = $query->count();
        $data = $query->offset( ($page - 1) * $pageSize)
            ->limit($pageSize)
            ->get();
        $totalPages = ceil($total / $pageSize);
        
        
        return response()->json([
            'message'=>'Relatorio de comunidades',
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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:255',
            'description'=>'nullable|string|max:255',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message'=>'Erro nas indormações da comunidade',
                'status'=>404,
                'errors'=>$validator->errors()
            ],404);
        }

        $data = Comunidade::create($request->all());
        return response()->json([
            'message'=>'Comunidade criada com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        try{
            $data = Comunidade::findOrFail($id);
            return response()->json([
                'message'=>'Comunidade encontrada',
                'status'=>200,
                'data'=>$data
            ],200);
        } catch(HttpResponseException $e){
            return response()->json([
                'message'=>'Comunidade não encontrada',
                'status'=>404,
                'data'=>$e
            ],404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'sometimes|required|string|max:255',
            'description'=>'nullable|string|max:255',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message'=>'Erro nas indormações da comunidade',
                'status'=>404,
                'errors'=>$validator->errors()
            ],404);
        }

        $data = Comunidade::Find($id);
        if (!$data) {
            return response()->json([
                'message'=>'Comunidade não encontrada',
                'data'=>$id,
                'status'=>404,
            ],404);
        }

        $data->name = $request->name;
        $data->description = $request->description;
        $data->save();
        return response()->json([
            'message'=>'Comunidade atualizada com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $data = Comunidade::find($id);
        if (!$data) {
            return response()->json([
                'message'=>'Comunidade não encontrada',
                'data'=>$id,
                'status'=>404,
            ],404);
        }
        $data->delete();
        return response()->json([
            'message'=>'Comunidade deletada com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);
    }
}
