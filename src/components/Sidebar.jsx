import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = () => {
    return (
        <div class="w-1/3 bg-white/10 backdrop-blur-md border-r border-white/20 flex flex-col gap-4 rounded-l-lg">
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar