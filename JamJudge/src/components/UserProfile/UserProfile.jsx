import { useState, useEffect } from 'react';
import { getPosts, deletePost, getUser, getUsers } from "../../api";



function userProfile() {

    const [username, setUsername] = useState("");

    let usernameInput;

    useEffect(() => {
            const loadUsers = async () => {
                try {
                    const res = await api.getUsers(id);
                    setUsers(res.data)
                } catch (err) {
                    console.error('Error loading user profile:', err);
                }
            };
    
            loadUsers();
        }, []);


    return (
        <>
            <h1>UserProfile</h1>
            <label id="username">Enter Username: </label>
            <input id="username" type="text" value={usernameInput} onChange={(e) => setUsername(e.target.value)}/>
            <button type="submit">Submit</button>
        </>
    )
}

export default userProfile;