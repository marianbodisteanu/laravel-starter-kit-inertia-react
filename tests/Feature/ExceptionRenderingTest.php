<?php

declare(strict_types=1);

it('responds to the health check route', function (): void {
    $this->get('/up')->assertOk();
});

it('renders json for api routes regardless of accept header', function (): void {
    $response = $this->get('/api/nonexistent', ['Accept' => 'text/html']);

    $response->assertNotFound()
        ->assertHeader('Content-Type', 'application/json');
});
