<?php

declare(strict_types=1);

use App\Models\User;
use PragmaRX\Google2FA\Google2FA;

it('renders two factor authentication page', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)->session(['auth.password_confirmed_at' => time()]);

    $response = $this->fromRoute('dashboard')
        ->get(route('two-factor.show'));

    $response->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('user-two-factor-authentication/show')
            ->has('twoFactorEnabled'));
});

it('shows two factor disabled when not enabled', function (): void {
    $user = User::factory()->withoutTwoFactor()->create();

    $this->actingAs($user)->session(['auth.password_confirmed_at' => time()]);

    $response = $this->fromRoute('dashboard')
        ->get(route('two-factor.show'));

    $response->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('user-two-factor-authentication/show')
            ->where('twoFactorEnabled', false));
});

it('redirects back to the settings page after confirming a code', function (): void {
    $user = User::factory()->withoutTwoFactor()->create();

    $this->actingAs($user)->session(['auth.password_confirmed_at' => time()]);

    $this->fromRoute('two-factor.show')
        ->post(route('two-factor.enable'))
        ->assertRedirect(route('two-factor.show'));

    $xhrHeaders = [];

    $this->getJson(route('two-factor.qr-code'), $xhrHeaders)->assertOk();
    $this->getJson(route('two-factor.secret-key'), $xhrHeaders)->assertOk();

    $code = resolve(Google2FA::class)->getCurrentOtp(
        decrypt($user->refresh()->two_factor_secret),
    );

    $this->post(route('two-factor.confirm'), ['code' => $code])
        ->assertRedirect(route('two-factor.show'));

    expect($user->refresh()->hasEnabledTwoFactorAuthentication())->toBeTrue();
});

it('shows two factor enabled when enabled', function (): void {
    $user = User::factory()->create([
        'two_factor_secret' => encrypt('secret'),
        'two_factor_recovery_codes' => encrypt(json_encode(['code1', 'code2'])),
        'two_factor_confirmed_at' => now(),
    ]);

    $this->actingAs($user)->session(['auth.password_confirmed_at' => time()]);

    $response = $this->fromRoute('dashboard')
        ->get(route('two-factor.show'));

    $response->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('user-two-factor-authentication/show')
            ->where('twoFactorEnabled', true));
});
