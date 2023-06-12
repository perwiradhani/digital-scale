<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MuatanResource extends JsonResource
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
            'plat' => $this->plat,
            // 'jenis_truck' => $this->jenis_truck,
            'beban_seluruh' => $this->beban_seluruh,
            'waktu' => $this->waktu,
            // 'beban_max' => $this->beban_max,
            // 'user' => $this->whenLoaded('user')
            'status' => $this->status,
        ];
    }
}
