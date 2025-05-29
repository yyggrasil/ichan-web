<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Segue;
use App\Http\Requests\StoreSegueRequest;
use App\Http\Requests\UpdateSegueRequest;
use Illuminate\Http\RedirectResponse;

class SegueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $page = request()->get('page', '1');
        $pageSize = request()->get('pageSize', '5');
        $dir = request()->get('dir', 'asc');
        $props = request()->get('props', 'id');
        $search = request()->get('search', '');

        $query = Segue::select("*")
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
    public function store(StoreSegueRequest $request)
    {
        $validator = $request->validated();

        $data = Segue::create($request->all());

        return response()->json([
            'message'=>'Segue criado com sucesso',
            'status'=>201,
            'data'=>$data
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        try {
            $data = Segue::findOrFail($id);
            return response()->json([
                'message'=>'Segue encontrado',
                'status'=>200,
                'data'=>$data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message'=>$e->getMessage(),
                'status'=>404
            ], 404);
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
    public function update(UpdateSegueRequest $request, string $id)
    {
        $validator = $request->validated();

        $data = Segue::find($id);

        if (!$data) {
            return response()->json([
                'message'=>'Segue não localizado',
                'data'=>$id,
                'status'=>404
            ],404);
        }

        $data->update($request->all());

        return response()->json([
            'message'=>'Segue atualizado com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $data = Segue::find($id);
        if (!$data) {
            return response()->json([
                'message'=>'Segue não encontrado',
                'data'=>$id,
                'status'=>404
            ],404);
        }
        $data->delete();
        return response()->json([
            'message'=>'Segue deletado com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);
    }
}
