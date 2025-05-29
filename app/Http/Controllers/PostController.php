<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\HttpException;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;

class PostController extends Controller
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


        $query = Post::select("*")
            ->whereNull("deleted_at")
            ->OrderBy($props, $dir);

        $total = $query->count();

        $data = $query->offset( ($page - 1) * $pageSize)
            ->limit($pageSize)
            ->get();

        $totalPages = ceil($total / $pageSize);


        return response()->json([
            'message'=>'Relatorio de posts',
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
    public function store(StorePostRequest $request)
    {
        $validator = $request->validated();

        $data = Post::create($request->all());

        return response()->json([
            'message'=>'Post criado com sucesso',
            'status'=>201,
            'data'=>$data
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        try {
            $data = Post::findOrFail($id);
        } catch (HttpResponseException $e) {
            return response()->json([
                'message'=>$e->getMessage(),
                'status'=>404
            ], 404);
        }
        return response()->json([
            'message'=>'Post encontrado com sucesso',
            'status'=>200,
            'data'=>$data
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
    public function update(UpdatePostRequest $request, string $id)
    {
        $validator = $request->validated();

        $data = Post::find($id);

        if (!$data) {
            return response()->json([
                'message'=>'Post não localizado',
                'data'=>$id,
                'status'=>404
            ],404);
        }

        $data->update($request->all());

        return response()->json([
            'message'=>'Post atualizado com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $data = Post::find($id);
        if (!$data) {
            return response()->json([
                'message'=>'Post não localizado',
                'data'=>$id,
                'status'=>404
            ],404);
        }
        $data->delete();
        return response()->json([
            'message'=>'Post excluído com sucesso',
            'status'=>200,
            'data'=>$data
        ], 200);
    }
}
