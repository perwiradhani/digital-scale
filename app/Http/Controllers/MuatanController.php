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
        $muatan = Muatan::create([
            'id_truck' => $request->id_truck,
            'id_user' => $request->id_user,
            'id_pemilik' => $request->id_pemilik,
            'jenis_muatan' => $request->jenis_muatan,
            'berat_muatan' => $request->berat_muatan,
            'tujuan' => $request->tujuan,
            'tanggal_muat' => $request->tanggal_muat,
            'tanggal_bongkar' => $request->tanggal_bongkar,
            'harga_muatan' => $request->harga_muatan,
            'status' => $request->status,
        ]);

        return response()->json([
            'user' => $muatan,
            'message' => 'Data muatan berhasil ditambahkan'
        ], 200);
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
