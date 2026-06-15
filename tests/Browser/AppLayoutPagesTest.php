<?php

declare(strict_types=1);

use App\Models\User;

it('renders the dashboard inside the app layout', function (): void {
    $this->actingAs(User::factory()->create());

    visit(route('dashboard'))
        ->assertSee('Dashboard');
});

it('renders the profile settings page inside the nested settings layout', function (): void {
    $this->actingAs(User::factory()->create());

    visit(route('user-profile.edit'))
        ->assertSee('Settings')
        ->assertSee('Two-Factor Auth')
        ->assertSee('Profile information');
});

it('renders the password settings page inside the nested settings layout', function (): void {
    $this->actingAs(User::factory()->create());

    visit(route('password.edit'))
        ->assertSee('Settings')
        ->assertSee('Two-Factor Auth')
        ->assertSee('Update password');
});

it('renders the appearance settings page inside the nested settings layout', function (): void {
    $this->actingAs(User::factory()->create());

    visit(route('appearance.edit'))
        ->assertSee('Settings')
        ->assertSee('Two-Factor Auth')
        ->assertSee('Appearance settings');
});

it('renders the two-factor settings page inside the nested settings layout', function (): void {
    $this->actingAs(User::factory()->create())
        ->withSession(['auth.password_confirmed_at' => time()]);

    visit(route('two-factor.show'))
        ->assertSee('Settings')
        ->assertSee('Two-Factor Auth');
});

it('keeps the settings layout and updates breadcrumbs when navigating between settings pages', function (): void {
    $this->actingAs(User::factory()->create());

    visit(route('user-profile.edit'))
        ->assertSee('Profile settings')
        ->click('Password')
        ->assertSee('Update password')
        ->assertSee('Password settings')
        ->assertSee('Two-Factor Auth');
});
