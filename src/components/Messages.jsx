import React from 'react'

const Messages = () => {
    return (
        <div className="p-5 space-y-4">
            {/* Incoming message */}
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full ring-2 ring-offset-2">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                        />
                    </div>
                </div>
                <div className="chat-header text-gray-300">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50 ml-2">12:45</time>
                </div>
                <div className="chat-bubble bg-[#f1f4ff] text-black shadow-md rounded-xl px-4 py-2">
                    You were the Chosen One!
                </div>
                <div className="chat-footer opacity-50 text-gray-400">Delivered</div>
            </div>

            {/* Outgoing message */}
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full ring-2 ring-offset-2">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                        />
                    </div>
                </div>
                <div className="chat-header text-gray-300">
                    Anakin
                    <time className="text-xs opacity-50 ml-2">12:46</time>
                </div>
                <div className="chat-bubble bg-[#a7bcff] text-black shadow-md rounded-xl px-4 py-2">
                    I hate you!
                </div>
                <div className="chat-footer opacity-50 text-gray-400">
                    Seen at 12:46
                </div>
            </div>
            {/* Outgoing message */}
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full ring-2 ring-offset-2">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                        />
                    </div>
                </div>
                <div className="chat-header text-gray-300">
                    Anakin
                    <time className="text-xs opacity-50 ml-2">12:46</time>
                </div>
                <div className="chat-bubble bg-[#a7bcff] text-black shadow-md rounded-xl px-4 py-2">
                    I hate you!
                </div>
                <div className="chat-footer opacity-50 text-gray-400">
                    Seen at 12:46
                </div>
            </div>
            {/* Incoming message */}
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full ring-2 ring-offset-2">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                        />
                    </div>
                </div>
                <div className="chat-header text-gray-300">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50 ml-2">12:45</time>
                </div>
                <div className="chat-bubble bg-[#f1f4ff] text-black shadow-md rounded-xl px-4 py-2">
                    You were the Chosen One!
                </div>
                <div className="chat-footer opacity-50 text-gray-400">Delivered</div>
            </div>
            {/* Incoming message */}
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full ring-2 ring-offset-2">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                        />
                    </div>
                </div>
                <div className="chat-header text-gray-300">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50 ml-2">12:45</time>
                </div>
                <div className="chat-bubble bg-[#f1f4ff] text-black shadow-md rounded-xl px-4 py-2">
                    You were the Chosen One!
                </div>
                <div className="chat-footer opacity-50 text-gray-400">Delivered</div>
            </div>
            {/* Incoming message */}
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full ring-2 ring-offset-2">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                        />
                    </div>
                </div>
                <div className="chat-header text-gray-300">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50 ml-2">12:45</time>
                </div>
                <div className="chat-bubble bg-[#f1f4ff] text-black shadow-md rounded-xl px-4 py-2">
                    You were the Chosen One!
                </div>
                <div className="chat-footer opacity-50 text-gray-400">Delivered</div>
            </div>
        </div>
    )
}

export default Messages
