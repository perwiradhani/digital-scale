<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TruckResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'plat_nomor' => $this->plat_nomor,
            'jenis_truck' => $this->jenis_truck,
            'beban_kosong' => $this->beban_kosong,
            'beban_max' => $this->beban_max,
            'user' => $this->whenLoaded('user')
        ];
    }
}
