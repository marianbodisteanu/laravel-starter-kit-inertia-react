<?php

declare(strict_types=1);

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property-read User $resource
 */
final class AuthUserResource extends JsonResource
{
    /**
     * @return array{
     *     id: string,
     *     name: string,
     *     email: string,
     *     avatar: string,
     *     email_verified_at: string|null,
     *     two_factor_enabled: bool,
     * }|null
     */
    public function toData(): ?array
    {
        if ($this->resource === null) {
            return null;
        }

        return [
            'id' => $this->resource->id,
            'name' => $this->resource->name,
            'email' => $this->resource->email,
            'avatar' => '',
            'email_verified_at' => $this->resource->email_verified_at?->toIso8601String(),
            'two_factor_enabled' => $this->resource->two_factor_confirmed_at !== null,
        ];
    }

    /**
     * @return array<string, mixed>|null
     */
    public function toArray(Request $request): ?array
    {
        return $this->toData();
    }
}
