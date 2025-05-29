<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Follow;

class FollowController extends Controller
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


        $query = Follow::select("*")
            ->whereNull("deleted_at")
            ->OrderBy($props, $dir);

        $total = $query->count();

        $data = $query->offset( ($page - 1) * $pageSize)
            ->limit($pageSize)
            ->get();

        $totalPages = ceil($total / $pageSize);


        return response()->json([
            'message'=>'Relatorio de comentario',
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
    public function store(StoreFollowRequest $request)
    {
        $validator = $request->validated();

        $data = Follow::create([
            'follower_id' => $request->follower_id,
            'followed_id' => $request->followed_id,
        ]);

        return response()->json([
            'message'=>'Follow created successfully',
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
            $data = Follow::findOrFail($id);
        } catch (HttpResponseException $e) {
            return response()->json([
                'message'=>$e->getMessage(),
                'status'=>404
            ], 404);
        }

        return response()->json([
            'message'=>'Follow details',
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
    public function update(UpdateFollowRequest $request, string $id)
    {
        $validator = $request->validated();

        $data = Follow::find($id);

        if (!$data) {
            return response()->json([
                'message'=>'Follow not found',
                'data'=>$id,
                'status'=>404
            ],404);
        }

        $data->update($request->all());

        return response()->json([
            'message'=>'Follow updated successfully',
            'status'=>200,
            'data'=>$data
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $data = Follow::find($id);
        if (!$data) {
            return response()->json([
                'message'=>'Follow not found',
                'data'=>$id,
                'status'=>404
            ],404);
        }
        $data->delete();
        return response()->json([
            'message'=>'Follow deleted successfully',
            'status'=>200,
            'data'=>$data
        ],200);
    }
}
