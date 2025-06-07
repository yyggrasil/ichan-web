<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\HttpException;
use App\Http\Requests\StoreCategoriaRequest;
use App\Http\Requests\UpdateCategoriaRequest;
use Illuminate\Http\RedirectResponse;

class CategoriaController extends Controller
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


        $query = Categoria::select("*")
            ->whereNull("deleted_at")
            ->OrderBy($props, $dir);

        $total = $query->count();

        $data = $query->offset( ($page - 1) * $pageSize)
            ->limit($pageSize)
            ->get();

        $totalPages = ceil($total / $pageSize);


        return response()->json([
            'message'=>'Relatório de categorias',
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
    public function store(StoreCategoriaRequest $request)
    {
        $validator = $request->validated();

        $data = Categoria::create($request->all());
        
        return response()->json([
            'message'=>'Categoria cadastrado com sucesso',
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
            $data = Categoria::findOrfail($id);
        } catch (HttpResponseException $e) {
            response()->json([
                'message'=>'Categoria não encontrada',
                'status'=>404
            ],404);
        }

        return response()->json([
            'message'=>'Categoria encontrada com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);
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
    public function update(UpdateCategoriaRequest $request, string $id)
    {
        $validator = $request->validated();


        $data = Categoria::find($id);

        if (!$data) {
            return response()->json([
                'message'=>'Categoria não encontrado',
                'status'=>404
            ],404);
        }

        $data->update($request->all());

        return response()->json([
            'message'=>'Categoria atualizado com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $data = Categoria::find($id);

        if (!$data) {
            return response()->json([
                'message'=>'Categoria não encontrado',
                'status'=>404
            ],404);
        }

        $data->delete();

        return response()->json([
            'message'=>'Categoria deletado com sucesso',
            'status'=>200
        ],200);
    }
}
