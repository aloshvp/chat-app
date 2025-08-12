import React, { useContext } from 'react'
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

    const navigate = useNavigate();

    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);

    const { displayName, photoURL } = currentUser;

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/login")
        }).catch((error) => {
            console.log(error)
        });
    }



    return (
        <div className='flex items-center p-4 justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
            <div>
                <h2 className='text-[#E3E7F1] text-[24px] font-bold'>Chat</h2>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <div className="avatar avatar-online">
                    <div className="w-10 rounded-full">
                        <img src={photoURL} />
                    </div>
                </div>
                <h5 className='text-[#E3E7F1] text-[18px]'>{displayName}</h5>
            </div>
            <div>
                <button className="btn btn-active bg-[#C6CBEF]" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
