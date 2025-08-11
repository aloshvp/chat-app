import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center p-4 justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
            <div>
                <h2 className='text-[#E3E7F1] text-[24px] font-bold'>Chat</h2>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <div className="avatar avatar-online">
                    <div className="w-10 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>
                <h5 className='text-[#E3E7F1] text-[18px]'>John Norton</h5>
            </div>
            <div>
                <button className="btn btn-active bg-[#C6CBEF]">Logout</button>
            </div>
        </div>
    )
}

export default Navbar
