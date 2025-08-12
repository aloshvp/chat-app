import React from 'react'
import Register from './Register'
import Login from './Login'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Home = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-gradient-to-b from-[#4a4e91] to-[#6366f1] text-white">
            <div className='flex border-2 rounded-xl border-white h-[80vh] w-[80vw]'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home
