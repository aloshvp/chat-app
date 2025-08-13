import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
    const [chats, setChats] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (docSnap) => {
                if (docSnap.exists()) {
                    setChats(docSnap.data());
                } else {
                    setChats({});
                }
            });
            return () => unsub();
        };

        currentUser?.uid && getChats();
    }, [currentUser?.uid]);

    const handleSelect = (user) => {
        dispatch({ type: "CHANGE_USER", payload: user })
    }

    return (
        <div className="overflowy-scroll">
            <div className="flex flex-col divide-y divide-[#9da0ce]/30 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#9da0ce]/50 scrollbar-track-transparent">
                {Object.entries(chats)?.map(([chatId, chatData]) => (
                    <div
                        key={chatId}
                        className="flex flex-wrap sm:flex-nowrap items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition cursor-pointer"
                        onClick={() => handleSelect(chatData.userInfo)}
                    >
                        {/* Avatar */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-200 flex-shrink-0">
                            <img
                                src={chatData.userInfo.photoURL}
                                alt={chatData.userInfo.displayName}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* User info */}
                        <div className="flex flex-col justify-center min-w-0">
                            <span className="text-white font-medium truncate">
                                {chatData.userInfo.displayName}
                            </span>
                            <p className="text-sm text-gray-300 truncate">
                                Last message here...
                            </p>
                        </div>
                    </div>
                ))}
            </div>


        </div >
    );
};

export default Chats;
