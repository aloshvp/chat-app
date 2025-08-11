import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = () => {
    return (
        <div className='w-[40%] border-r-2 border-r-white bg-[#8186D5] rounded-l-xl'>
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar