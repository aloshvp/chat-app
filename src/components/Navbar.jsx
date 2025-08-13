import React, { useContext } from 'react';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    const { displayName, photoURL } = currentUser;

    const handleLogout = () => {
        signOut(auth)
            .then(() => navigate("/login"))
            .catch((error) => console.log(error));
    };

    return (
        <div className="flex items-center p-4 justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] flex-wrap gap-3">
            {/* Left: SVG Logo */}
            <div className="flex items-center">
                <svg
                    width="44px"
                    height="44px"
                    viewBox="-3.6 -3.6 31.2 31.2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="-3.6"
                        y="-3.6"
                        width="31.2"
                        height="31.2"
                        rx="15.6"
                        fill="#ffffff"
                    />
                    <path
                        d="M9 12.08L11 14L15 10"
                        stroke="#6366f1"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7"
                        stroke="#6366f1"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* Middle: User Info */}
            <div className="flex items-center justify-center gap-3">
                <div className="avatar avatar-online">
                    <div className="w-10 rounded-full">
                        <img src={photoURL} alt="User" />
                    </div>
                </div>
                <h5 className="text-[#E3E7F1] text-[18px]">{displayName}</h5>
            </div>

            {/* Right: Logout Button */}
            <div>
                <button
                    className="btn btn-active bg-[#C6CBEF] text-black"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;
