<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Repositories\ChatRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class ChatController extends Controller
{

    public function __construct(private ChatRepository $chatRepository)
    {
        $this->chatRepository = $chatRepository;
    }

    public function index(Request $request, ?int $receiverId = null): Response
    {
        $messages = empty($receiverId) ? [] : $this->chatRepository->getUserMessages($request->user()->id, $receiverId);
        $recentMessages = $this->chatRepository->getRecentUsersWithMessage($request->user()->id);
        return Inertia::render('Chat/Chat', [
            "messages" => $messages,
            'recentMessages' => $recentMessages
        ]);
    }

    public function store(Request $request, int $receiverId)
    {
        $request->validate([
            'message' => ['required', 'string']
        ]);
        if (empty($receiverId)) {
            return 404;
        }

        try {
            $message = $this->chatRepository->store([
                'message' => $request->message,
                'sender_id' => (int)request()->user()->id,
                'receiver_id' => $receiverId
            ]);
            event(new MessageSent($message));
            return redirect()->route('chat.index', $receiverId);
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }

    }

}
