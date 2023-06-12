<?php

namespace App\Http\Controllers;

use App\Models\Muatan;
use App\Http\Requests\StoreMuatanRequest;
use App\Http\Requests\UpdateMuatanRequest;
use Illuminate\Http\Request;
use App\Http\Resources\MuatanResource;
use Illuminate\Support\Facades\DB;

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
        // return MuatanResource::collection($muatan);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMuatanRequest $request)
    {
        //
        $request->validate(
            [
                // 'jenis_muatan' => 'required',
                'plat_nomor' => 'required',
                'beban_seluruh' => 'required',
            ]
        );

        $muatan = Muatan::create($request->all());
        return response()->json(
            [
                'message' => 'Muatan berhasil ditambahkan',
                'muatan' => $muatan
            ], 200
        );
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
        // $muatan->update($request->all());
        $request->validate(
            [
                'jenis_muatan' => 'required',
                'beban_seluruh' => 'required',
            ]
        );

        $muatan->jenis_muatan = $request->jenis_muatan;
        // $muatan->berat_muatan = $request->berat_muatan;
        $muatan->beban_seluruh = $request->beban_seluruh;
        // $muatan->id_user = $request->id_user;
        // $muatan->id_truck = $request->id_truck;
        $muatan->save();
        return response()->json(
            [
                'message' => 'Muatan berhasil diupdate',
                'muatan' => $muatan
            ], 200
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $muatan = Muatan::find($id);
        $muatan->delete();
        return response()->json(
            [
                'message' => 'Muatan berhasil dihapus',
                'muatan' => $muatan
            ], 200
        );
    }

    public function scale(Request $request)
    {
        $request->input(
            [
                // 'jenis_muatan' => 'required',
                'plat_nomor' => 'required',
                'berat' => 'required',
            ]
        );
        // $request->input('berat');
        // $muatan = Muatan::create($request->all());
        $muatan = Muatan::create([
            // 'jenis_muatan' => $request->jenis_muatan,
            // 'berat_muatan' => $request->berat,
            'plat' => $request->plat_nomor,
            'beban_seluruh' => $request->berat,
            // 'id_user' => $request->id_user,
            // 'id_truck' => $request->id_truck,
        ]);
        return response()->json(
            [
                'message' => 'Muatan berhasil ditambahkan',
                'muatan' => $muatan
            ], 200
        );
        // Process and store the weight data in the database as needed
    }

    public function updateStatus(Request $request, $id)
    {
        $muatan = Muatan::find($id);
        // $muatan->status = $request->status;
        // $muatan->save();
        $this->validate($request, [
            'status' => 'required'
        ]);
        $muatan->update(
            [
                'status' => $request->status
            ]
        );
        return response()->json(
            [
                'message' => 'Status muatan berhasil diupdate',
                'muatan' => $muatan
            ], 200
        );
    }
}
