<?php

namespace App\Http\Controllers;

use App\Models\Muatan;
use App\Http\Requests\StoreMuatanRequest;
use App\Http\Requests\UpdateMuatanRequest;

class MuatanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $muatan = Muatan::all();
        return response()->json($muatan);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMuatanRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Muatan $muatan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMuatanRequest $request, Muatan $muatan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Muatan $muatan)
    {
        //
    }
}
