import React, { useContext } from 'react'
import Messages from './Messages'
import ChatNavbar from './ChatNavbar'
import MessageBox from './MessageBox'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'

const Chat = () => {

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const { displayName, photoURL } = data.user;
    const { chatId } = data;
    console.log(currentUser);
    console.log(data);
    const { photoURL: userImg } = currentUser;

    return (
        <div className="w-full h-full flex flex-col">
            <ChatNavbar displayName={displayName} />
            <div className="flex-1 overflow-y-auto">
                <Messages chatId={chatId} userImg={userImg} photoURL={photoURL} />
            </div>
            <MessageBox chatId={chatId} />
        </div >
    )
}

export default Chat
