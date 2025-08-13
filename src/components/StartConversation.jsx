import React from "react";

const StartConversation = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="none"
                viewBox="-3.6 -3.6 31.20 31.20"
            >
                <rect
                    x="-3.6"
                    y="-3.6"
                    width="31.20"
                    height="31.20"
                    rx="15.6"
                    fill="#fff"
                ></rect>
                <path
                    d="M9 12.08L11 14L15 10"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M17 3.34C15.53 2.49 13.82 2 12 2C6.48 2 2 6.48 2 12c0 1.6.38 3.11 1.04 4.45.18.36.24.77.14 1.15l-.6 2.23c-.26.97.62 1.85 1.6 1.6l2.23-.6c.38-.1.79-.04 1.15.14C8.89 21.62 10.4 22 12 22c5.52 0 10-4.48 10-10 0-1.82-.49-3.53-1.34-5"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                ></path>
            </svg>

            <h2 className="mt-4 text-lg font-semibold text-gray-700">
                Start a New Conversation
            </h2>
            <p className="mt-2 text-white text-sm max-w-xm">
                Select a user from the list or search to begin chatting.
            </p>
        </div>
    );
};

export default StartConversation;
