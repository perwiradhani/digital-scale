<?php

namespace App\Http\Controllers;

use App\Models\Truck;
use App\Http\Requests\StoreTruckRequest;
use App\Http\Requests\UpdateTruckRequest;
use App\Http\Resources\TruckResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TruckController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $truck = Truck::with('user:id')->get();
        // return response()->json(['data' => $truck]);
        return TruckResource::collection($truck);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        // Auth::user()->id;
        $this->validate($request, [
            'plat_nomor' => 'required',
            'jenis_truck' => 'required',
            'beban_kosong' => 'required',
            'beban_max' => 'required',
        ]);

        $truck = Truck::create([
            'plat_nomor' => $request->plat_nomor,
            'jenis_truck' => $request->jenis_truck,
            'beban_kosong' => $request->beban_kosong,
            'beban_max' => $request->beban_max,
            // 'id_user' => Auth::user()->id,
        ]);

        // return response()->json("Data created");
        return response()->json([
            'user' => $truck,
            'message' => 'Data truck berhasil ditambahkan'
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $truck = Truck::with('user:id,username')->findorfail($id);
        // return response()->json($truck);
        return new TruckResource($truck);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $this->validate($request, [
            'plat_nomor' => 'required',
            'jenis_truck' => 'required',
            'beban_kosong' => 'required',
            'beban_max' => 'required',
        ]);

        $truck = Truck::find($id);
        // $truck->plat_nomor = $request->plat_nomor;
        // $truck->jenis_truck = $request->jenis_truck;
        // $truck->beban_kosong = $request->beban_kosong;
        // $truck->beban_max = $request->beban_max;
        // $truck->save();
        $truck->update([
            'plat_nomor' => $request->plat_nomor,
            'jenis_truck' => $request->jenis_truck,
            'beban_kosong' => $request->beban_kosong,
            'beban_max' => $request->beban_max,
        ]
        );
        // return response()->json("Data updated");
        return response()->json([
            'user' => $truck,
            'message' => 'Data truck berhasil diupdate'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $truck = Truck::find($id);
        $truck->delete();

        // return response()->json("Data deleted");
        return response()->json([
            'user' => $truck,
            'message' => 'Data truck berhasil dihapus'
        ], 200);
    }

    public function getTruckCount()
    {
        $truck = Truck::all()->count();
        $truck = Truck::count();
        return response()->json($truck, 200);
        // $tableName = 'trucks';
        // $count = DB::table($tableName)->count();

        // return response()->json([
        //      $count], 200);
    }
}
