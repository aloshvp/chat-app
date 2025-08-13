import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Chats = () => {
    const [chats, setChats] = useState([]);
    const { currentUser } = useContext(AuthContext);

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

    return (
        <div>
            <div className="flex flex-col divide-y divide-[#9da0ce]/30">
                {Object.entries(chats)?.map(([chatId, chatData]) => (
                    <div
                        key={chatId}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition cursor-pointer"
                    >
                        <div className="w-14 h-14 rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-200">
                            <img src={chatData.userInfo.photoURL} alt={chatData.userInfo.displayName} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-white font-medium">
                                {chatData.userInfo.displayName}
                            </span>
                            <p className="text-sm text-gray-300">
                                {/* Replace with actual last message if available */}
                                Last message here...
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chats;
