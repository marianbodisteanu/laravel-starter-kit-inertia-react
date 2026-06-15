<?php

declare(strict_types=1);

use App\Models\User;

it('renders the login page inside the auth layout', function (): void {
    visit(route('login'))
        ->assertSee('Log in to your account')
        ->assertSee('Enter your email and password below to log in');
});

it('renders the register page inside the auth layout', function (): void {
    visit(route('register'))
        ->assertSee('Create an account')
        ->assertSee('Enter your details below to create your account');
});

it('renders the forgot-password page inside the auth layout', function (): void {
    visit(route('password.request'))
        ->assertSee('Forgot password')
        ->assertSee('Enter your email to receive a password reset link');
});

it('renders the reset-password page inside the auth layout', function (): void {
    visit(route('password.reset', ['token' => 'test-token']).'?email=test@example.com')
        ->assertSee('Reset password')
        ->assertSee('Please enter your new password below');
});

it('renders the verify-email page inside the auth layout', function (): void {
    $user = User::factory()->unverified()->create();

    $this->actingAs($user);

    visit(route('verification.notice'))
        ->assertSee('Verify email')
        ->assertSee('Please verify your email address');
});

it('sets and flips the two-factor challenge layout props via setLayoutProps', function (): void {
    $user = User::factory()->create();

    $this->withSession(['login.id' => $user->id]);

    visit(route('two-factor.login'))
        ->assertSee('Authentication code')
        ->assertSee(
            'Enter the authentication code provided by your authenticator application.',
        )
        ->click('login using a recovery code')
        ->assertSee('Recovery code')
        ->assertSee(
            'Please confirm access to your account by entering one of your emergency recovery codes.',
        );
});
