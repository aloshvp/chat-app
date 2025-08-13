import React from 'react'

const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-gradient-to-b from-[#4a4e91] to-[#6366f1] text-white">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    )
}

export default Loading
