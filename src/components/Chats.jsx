import React from "react";

const chatData = [
    {
        img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp",
        name: "John Doe",
        message: "Hey, how’s it going?",
    },
    {
        img: "https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp",
        name: "Sarah Lee",
        message: "Did you check the file?",
    },
    {
        img: "https://img.daisyui.com/images/profile/demo/gordon@192.webp",
        name: "Mike Ross",
        message: "See you tomorrow!",
    },
    {
        img: "https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp",
        name: "Anna Smith",
        message: "I’ll call you later",
    },
];

const Chats = () => {
    return (
        <div>
            <div className="flex flex-col divide-y divide-[#9da0ce]/30">
                {chatData.map((chat, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition cursor-pointer">

                        <div div className="w-14 h-14 rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-200" >
                            <img src={chat.img} alt={chat.name} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-white font-medium">{chat.name}</span>
                            <p className="text-sm text-gray-300">{chat.message}</p>
                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    );
};

export default Chats;
