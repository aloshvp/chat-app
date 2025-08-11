import React from 'react'

const Search = () => {
    return (
        <div className='p-4 border-b-1 border-[#9da0ce]'>
            <div>
                <label className="input w-[100%]">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className="grow" placeholder="Find a user" />
                    <kbd className="kbd kbd-sm">⌘</kbd>
                    <kbd className="kbd kbd-sm">K</kbd>
                </label>
            </div>
            <div className='flex mt-5 gap-4'>
                <div className="avatar avatar-online">
                    <div className="w-14 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>
                <div className="avatar avatar-offline">
                    <div className="w-14 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp" />
                    </div>
                </div>
                <div className="avatar avatar-online">
                    <div className="w-14 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>
                <div className="avatar avatar-offline">
                    <div className="w-14 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
