import React, { useContext } from 'react'
import Messages from './Messages'
import ChatNavbar from './ChatNavbar'
import MessageBox from './MessageBox'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'
import StartConversation from './StartConversation'

const Chat = () => {

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const { displayName } = data.user;
    const { chatId, user } = data;
    const { photoURL: userImg } = currentUser;

    console.log(data);

    if (chatId === "null") return <StartConversation />

    return (
        <div className="w-full h-full flex flex-col">
            <ChatNavbar displayName={displayName} />
            <div className="flex-1 overflow-y-auto">
                <Messages chatId={chatId} userImg={userImg} />
            </div>
            <MessageBox chatId={chatId} dataUid={user.uid} />
        </div >
    )
}

export default Chat
