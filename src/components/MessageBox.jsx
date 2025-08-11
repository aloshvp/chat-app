import React from 'react'

const MessageBox = () => {
    return (
        <div className='absolute bottom-0 w-[100%]'>
            <div className="w-full p-4 bg-[#C6CBEF] border-t border-gray-700 rounded-br-lg">
                <div className="flex items-center bg-[#2b2b2d] rounded-full px-4 py-2">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent text-white outline-none placeholder-gray-400"
                    />
                    <button className="ml-3 p-2 bg-[#a7bcff] rounded-full hover:bg-[#8fa7ff] transition">
                        {/* <PaperAirplaneIcon className="w-5 h-5 text-black rotate-45" /> */}
                    </button>
                </div>
            </div>
        </div >
    )
}

export default MessageBox