import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState, useContext } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Messages = ({ chatId = "", userImg = "", photoURL = "" }) => {
    const [messages, setMessages] = useState([]);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (!chatId) return;

        const unsub = onSnapshot(doc(db, "chats", chatId), (docSnap) => {
            if (docSnap.exists()) {
                setMessages(docSnap.data().messages || []);
            } else {
                setMessages([]);
            }
        });

        return () => unsub();
    }, [chatId]);

    const defaultAvatar = "https://ui-avatars.com/api/?background=random&name=User";

    return (
        <div className="p-5 space-y-4 overflow-y-auto h-full">
            {messages.map((m, idx) => {
                const isOwn = m.senderId === currentUser.uid;

                // Select image for sender
                const imgSrc = isOwn
                    ? currentUser.photoURL || defaultAvatar
                    : m.photoURL || userImg || defaultAvatar;


                return (
                    <div
                        key={idx}
                        className={`chat ${isOwn ? "chat-end" : "chat-start"}`}
                    >
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full ring-2 ring-offset-2">
                                <img src={imgSrc} alt={m.senderName || "User"} />
                            </div>
                        </div>
                        <div className="chat-header text-gray-300">
                            {m.senderName}
                            <time className="text-xs opacity-50 ml-2">
                                {m.date?.seconds
                                    ? new Date(m.date.seconds * 1000).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })
                                    : ""}
                            </time>
                        </div>
                        <div
                            className={`chat-bubble ${isOwn ? "bg-[#a7bcff]" : "bg-[#f1f4ff]"
                                } text-black shadow-md rounded-xl px-4 py-2`}
                        >
                            {m.text}
                        </div>
                        <div className="chat-footer opacity-50 text-gray-400">
                            {m.status || ""}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Messages;
