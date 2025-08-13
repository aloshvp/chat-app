import React, { useState, useEffect, useContext } from 'react';
import { collection, getDocs, getDoc, query, where, orderBy, limit, setDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Search = () => {
    const [userName, setUserName] = useState("");
    const [user, setUser] = useState(null); // single user object
    const [error, setError] = useState(null);

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const delay = setTimeout(() => {
            if (userName.trim().length < 3) {
                setUser(null);
                setError(null);
                return;
            }
            handleSearch();
        }, 500);

        return () => clearTimeout(delay);
    }, [userName]);

    const handleSearch = async () => {
        const q = query(
            collection(db, "users"),
            where("name", ">=", userName),
            where("name", "<=", userName + "\uf8ff"),
            orderBy("name"),
            limit(1) // only one result
        );

        try {
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setUser(null);
                setError("User not found!");
            } else {
                setUser(querySnapshot.docs[0].data()); // take first doc
                setError(null);
            }
        } catch (err) {
            console.error("Error searching user:", err);
            setError("Something went wrong.");
            setUser(null);
        }
    };

    const handleSelect = async () => {
        if (!user) return;

        const combinedID =
            currentUser.uid > user.uid
                ? currentUser.uid + user.uid
                : user.uid + currentUser.uid;

        try {
            const res = await getDoc(doc(db, "chats", combinedID));
            if (!res.exists()) {
                // Create a chat
                await setDoc(doc(db, "chats", combinedID), { messages: [] });

                // Update userChats for current user
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedID + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.name,
                        photoURL: user.photoURL
                    },
                    [combinedID + ".date"]: serverTimestamp()
                });

                // Update userChats for other user
                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedID + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedID + ".date"]: serverTimestamp()
                });
            }
        } catch (err) {
            console.log(err);
        } finally {
            setUser(null);
            setUserName("");
        }
    };

    return (
        <div>
            <div className="border-b border-[#9da0ce] p-4">
                <label className="input w-full flex items-center gap-2">
                    <input
                        type="search"
                        className="grow text-[#000] placeholder-[#9da0ce]"
                        placeholder="Find a user"
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                    />


                </label>
            </div>

            {error && <span className="text-red-500 p-4 block">{error}</span>}

            {user && (
                <div className="flex flex-col border-t border-[#9da0ce] p-5 gap-3">
                    <div
                        className="avatar flex items-center gap-3 border-b border-[#9da0ce] pb-3 cursor-pointer"
                        onClick={handleSelect}
                    >
                        <div className="w-14 rounded-full overflow-hidden">
                            <img src={user.photoURL} alt={user.name} />
                        </div>
                        <p className="text-[#fff]">{user.name}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
