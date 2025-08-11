import React from 'react'
import Messages from './Messages'
import ChatNavbar from './ChatNavbar'
import MessageBox from './MessageBox'

const Chat = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <ChatNavbar />
            <div className="flex-1 overflow-y-auto">
                <Messages />
            </div>
            <MessageBox />
        </div >
    )
}

export default Chat
