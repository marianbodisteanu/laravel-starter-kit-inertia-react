<?php

declare(strict_types=1);

use App\Http\Resources\AuthUserResource;
use App\Models\User;
use Illuminate\Http\Request;

it('serializes user data via toArray', function (): void {
    $user = User::factory()->create([
        'name' => 'Test User',
        'email' => 'test@example.com',
    ]);

    $data = AuthUserResource::make($user)->toArray(Request::create('/'));

    expect($data)->toMatchArray([
        'id' => $user->id,
        'name' => 'Test User',
        'email' => 'test@example.com',
        'avatar' => '',
        'two_factor_enabled' => true,
    ]);
});

it('returns null from toArray when no resource', function (): void {
    expect(AuthUserResource::make(null)->toArray(Request::create('/')))->toBeNull();
});
