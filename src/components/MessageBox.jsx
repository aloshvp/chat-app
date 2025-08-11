import React from 'react'

const MessageBox = () => {
    return (
        <div className="p-4 bg-white/10 border-t border-white/20">
            <div className="flex items-center bg-gray-900 rounded-full px-4 py-2">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
                />
                <button className="ml-3 p-2 bg-[#a7bcff] rounded-full hover:bg-[#8fa7ff] shadow-md transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black rotate-45" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.94 2.94a1.5 1.5 0 0 1 1.66-.33l12 5a1.5 1.5 0 0 1 0 2.78l-12 5a1.5 1.5 0 0 1-2.04-1.88L4.88 10 2.56 4.88a1.5 1.5 0 0 1 .38-1.94z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default MessageBox
