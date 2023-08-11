<?php

namespace Database\Factories;

use App\Models\Message;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Message>
 */
class MessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Message::class;

    public function definition(): array
    {
        return [
            'message' => $this->faker->text,
            'sender_id' => 2,
            'receiver_id' => 1
        ];
    }
}
