import React from 'react'

const ChatNavbar = ({ displayName = "" }) => {
    return (
        <div>
            <div className="flex items-center justify-between bg-white/10 px-4 py-3 border-b border-white/20">
                <span className='text-lg text-[#201f21] font-medium'>{displayName}</span>
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="synthwave" />
                </label>
            </div>
        </div >
    )
}

export default ChatNavbar