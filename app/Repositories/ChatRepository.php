<?php

namespace App\Repositories;

use App\Models\Message;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class ChatRepository
{
    public function getUserMessages(int $senderId, int $receiverId)
    {
        return Message::query()->whereIn('sender_id', [$senderId, $receiverId])
            ->orWhereIn('receiver_id', [$senderId, $receiverId])
            ->get();
    }

    public function getRecentUsersWithMessage(int $senderId): array
    {
        DB::statement("SET SESSION sql_mode=''");
        $recentMessages = Message::query()->where(function ($query) use ($senderId) {
            $query->where('sender_id', $senderId)->orWhere('receiver_id', $senderId);
        })
            ->groupBy(['sender_id', 'receiver_id'])
            ->select('sender_id', 'receiver_id', 'message', 'id')
            ->orderByDesc('id')
            ->limit(30)
            ->get();
        return $this->filterRecentMessages($recentMessages, $senderId);

    }


    public function store($data)
    {
        return Message::create($data);
    }

    public function filterRecentMessages(Collection $recentMessages, int $senderId): array
    {
        $recentUsersWithMessage = [];
        $usedUserIds = [];

        foreach ($recentMessages as $recentMessage) {
            $userId = $recentMessage->sender_id == $senderId
                ? $recentMessage->receiver_id
                : $recentMessage->sender_id;
            if (!in_array($userId, $usedUserIds)) {
                $recentUsersWithMessage[] = [
                    'user_id' => $userId,
                    'message' => $recentMessage,
                ];
                $usedUserIds[] = $userId;
            }
        }
        foreach ($recentUsersWithMessage as $key => $item) {
            $recentUsersWithMessage[$key]['name'] = User::find($item['user_id'])->value('name') ?: '';
        }
        return $recentUsersWithMessage;
    }
}
