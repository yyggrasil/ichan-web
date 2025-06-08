<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CategoriaDaComunidade;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\HttpException;
use App\Http\Requests\StoreCategoriaDaComunidadeRequest;
use App\Http\Requests\UpdateCategoriaDaComunidadeRequest;
use Illuminate\Http\RedirectResponse;

class CategoriaDaComunidadeController extends Controller
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

        $query = CategoriaDaComunidade::select("*")
            ->whereNull("deleted_at")
            ->OrderBy($props, $dir);

        $total = $query->count();

        $data = $query->offset(($page - 1) * $pageSize)
            ->limit($pageSize)
            ->get();

        $totalPages = ceil($total / $pageSize);

        return response()->json([
            'message' => 'Relatório de da conexao entre categoria e comunidade',
            'status' => 200,
            'page' => $page,
            'pageSize' => $pageSize,
            'dir' => $dir,
            'props' => $props,
            'search' => $search,
            'total' => $total,
            'totalPages' => $totalPages,
            'data' => $data
        ], 200);
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
    public function store(StoreCategoriaDaComunidadeRequest $request) 
    {
        $validator = $request->validated();

        $data = CategoriaDaComunidade::create([
            'categoria_id' => $request->categoria_id,
            'comunidade_id' => $request->comunidade_id,
        ]);

        return response()->json([
            'message' => 'Conexão criada com sucesso',
            'status' => 200,
            'data' => $data
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        try {
            $data = CategoriaDaComunidade::findOrFail($id);
        } catch (HttpException $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 404
            ], 404);
        }

        return response()->json([
            'message' => 'Conexão encontrada com sucesso',
            'status' => 200,
            'data' => $data
        ], 200);
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
    public function update(UpdateCategoriaDaComunidade $request, string $id)
    {
        $validator = $request->validated();

        $data = CategoriaDaComunidade::find($id);

        if (!$data) {
            return response()->json([
                'message' => 'Conexão não encontrada',
                'status' => 404
            ], 404);
        }

        $data->update($request->all());

        return response()->json([
            'message' => 'Conexão atualizada com sucesso',
            'status' => 200,
            'data' => $data
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = CategoriaDaComunidade::find($id);

        if (!$data) {
            return response()->json([
                'message'=>'Relação não encontrado',
                'status'=>404
            ],404);
        }

        $data->delete();

        return response()->json([
            'message'=>'Relação deletada com sucesso.',
            'status'=>200
        ],200);
    }
}
