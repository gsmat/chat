import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import ChatSidebar from "@/Components/Chat/ChatSidebar.jsx";
import ChatUserInfo from "@/Components/Chat/ChatUserInfo.jsx";
import ChatMessages from "@/Components/Chat/ChatMessages.jsx";
import ChatInput from "@/Components/Chat/ChatInput.jsx";

export default function Chat(props) {
    console.log(props)
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Chat
                </h2>
            }
        >
            <Head title="Chat"/>

            <div className="messanger p-4 bg-white h-screen overflow-hidden">
                <div className="flex">
                    <div className="basis-2/6 pt-3 bg-white border-r border-slate-100">
                        <ChatSidebar recentMessages = { props.recentMessages }/>
                    </div>

                    <div className="basis-3/6">
                        {/*<div className="flex justify-center items-center bg-slate-100 h-screen">*/}
                        {/*    <p className="font-bold text-black-200">*/}
                        {/*        Please select a user for chatting...*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <div className="">
                            <ChatUserInfo />

                            <div className="message-area mt-4 px-4">
                                <ChatMessages />
                            </div>

                            <ChatInput />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
