export default function ChatSidebar({recentMessages}) {
    return (
        <>
            <div className="">
                <div className="search-box h-10 text-slate-300">
                    <div className="flex justify-between px-5 border-b border-slate-100 pb-4">
                        <form className="flex justify-center items-center">
                            <i className="fa fa-search pr-2"></i>
                            <input type="text" name="search" id="search" placeholder="Search"
                                   className="font-light focus:outline-none"/>
                        </form>
                        <div>
                            <button className="relative">
                                <i className="fa fa-message"></i>
                                <i className="fa fa-plus absolute -top-2 text-sm"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="user-list overflow-y-auto h-screen bg-white">
                    {
                        recentMessages.map((user) => (

                            <div className="flex hover:bg-slate-100 transition px-5 py-3 hover:cursor-pointer">
                                <div className="pr-4">
                                    <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" width="50"/>
                                </div>
                                <div>
                                    <h3 className="text-violet-500 tex-md">{user.name.length >0 ? user.name: 'N/A' }</h3>
                                    <p className="text-sm text-gray-400 font-light overflow-hidden h-5">
                                        {user.message.message}
                                    </p>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </>
    );
}
