export default function ChatMessages() {
    return (
        <>
            <div className="relative receive-chat flex justify-start">
                <div
                    className="px-5 mb-2 bg-violet-400 text-white py-2 text-sm max-w-[80%] rounded font-light">
                    <i className="fa fa-caret-up text-violet-400 -top-2 absolute"></i>
                    <p>
                        I got two tickets to go to see this awesome band called, Lorem ipsum dollar
                        !! Do you want to come ?
                    </p>
                </div>
            </div>
            <div className="receive-chat flex justify-start">
                <div
                    className="px-5 mb-2 bg-violet-400 text-white py-2 text-sm max-w-[80%] rounded font-light">
                    <p>
                        I got two tickets to go to see this awesome band called, Lorem ipsum dollar
                        !! Do you want to come ?
                    </p>
                </div>
            </div>
            <div className="send-chat flex justify-end">
                <div
                    className="px-5 mb-2 bg-violet-200 text-slate-500 py-2 text-sm max-w-[80%] rounded font-light">
                    <p>
                        I got two tickets to go to see this awesome band called, Lorem ipsum dollar
                        !! Do you want to come ?
                    </p>
                </div>
            </div>
            <div className="receive-chat flex justify-start">
                <div
                    className="px-5 mb-2 bg-violet-400 text-white py-2 text-sm max-w-[80%] rounded font-light">
                    <p>
                        I got two tickets to go to see this awesome band called, Lorem ipsum dollar
                        !! Do you want to come ?
                    </p>
                </div>
            </div>
            <div className="relative send-chat flex justify-end">
                <div
                    className="px-5 mb-2 bg-violet-200 text-slate-500 py-2 text-sm max-w-[80%] rounded font-light">
                    <i className="fa fa-caret-down text-violet-200 bottom-0 right-4 absolute"></i>
                    <p>
                        I got two tickets to go to see this awesome band called, Lorem ipsum dollar
                        !! Do you want to come ?
                    </p>
                </div>
            </div>
        </>
    )
}
