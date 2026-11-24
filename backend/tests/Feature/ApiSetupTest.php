<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class ApiSetupTest extends TestCase
{
    use RefreshDatabase;

    public function test_api_health_endpoint_returns_ok_status(): void
    {
        $response = $this->getJson('/api/health');

        $response->assertStatus(200)
            ->assertJson([
                'status' => 'ok',
                'app' => 'ALUNE',
                'message' => 'ALUNE API is running smoothly',
            ])
            ->assertJsonStructure(['status', 'app', 'message', 'timestamp']);
    }

    public function test_unauthenticated_user_cannot_access_protected_api_route(): void
    {
        $response = $this->getJson('/api/user');

        $response->assertStatus(401)
            ->assertJson([
                'message' => 'Unauthenticated.',
            ]);
    }

    public function test_authenticated_user_can_access_protected_api_route(): void
    {
        $user = User::factory()->create([
            'name' => 'Admin Test',
            'email' => 'admin@alune.local',
        ]);

        Sanctum::actingAs($user, ['*']);

        $response = $this->getJson('/api/user');

        $response->assertStatus(200)
            ->assertJson([
                'status' => 'success',
                'data' => [
                    'id' => $user->id,
                    'name' => 'Admin Test',
                    'email' => 'admin@alune.local',
                ],
            ]);
    }
}
