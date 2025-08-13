import React, { useState, useEffect, useContext } from 'react';
import { collection, getDocs, getDoc, query, where, orderBy, limit, setDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Search = () => {
    const [userName, setUserName] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const delay = setTimeout(() => {
            if (userName.trim().length < 3) {
                setUsers([]);
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
            where("name", "<=", userName + "\uf8ff"), // matches names starting with input
            orderBy("name"),
            limit(10) // optional limit
        );

        try {
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setUsers([]);
                setError("User not found!");
            } else {
                setUsers(querySnapshot.docs.map(doc => doc.data()));
                setError(null);
            }
        } catch (err) {
            console.error("Error searching user:", err);
            setError("Something went wrong.");
            setUsers([]);
        }
    };

    const handleSelect = async () => {
        //check whether the group(chats in firestore) exists,if not create
        const combinedID =
            currentUser.uid > users[0].uid ?
                currentUser.uid + users[0].uid :
                users[0].uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, "chats", combinedID));
            if (!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc(db, "chats", combinedID), { messages: [] })

                //create user chats
                await updateDoc(doc(db, "userChats", users[0].uid),
                    {
                        [combinedID + ".userInfo"]: {
                            uid: users[0].uid,
                            displayName: users[0].name,
                            photoURL: users[0].photoURL
                        },
                        [combinedID + ".date"]: serverTimestamp()
                    })
            }
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setUsers([]);
            setUserName("");
        }

        // setUsers(null);
        // setUserName("");
        //create user chats
    }

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

            {users.length > 0 && (
                <div className="flex flex-col border-t border-[#9da0ce] p-5 gap-3">
                    {users?.map((user, index) => (
                        <div key={index} className="avatar flex items-center gap-3 border-b border-[#9da0ce] pb-3" onClick={handleSelect}>
                            <div className="w-14 rounded-full overflow-hidden">
                                <img src={user.photoURL} alt={user.name} />
                            </div>
                            <p className="text-[#fff]">{user.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
