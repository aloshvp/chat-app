import React from 'react'
import Messages from './Messages'
import ChatNavbar from './ChatNavbar'
import MessageBox from './MessageBox'

const Chat = () => {
    return (
        <div className='w-[60%] relative'>
            <ChatNavbar />
            <Messages />
            <MessageBox />
        </div>
    )
}

export default Chat
