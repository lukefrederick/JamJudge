import { useState, useEffect } from 'react';
import * as api from "../../api";
import LoadUserProfile from "./LoadUserProfile";

// This isn't engineered particularly well for scalability and this is definitely
// that should be done in the backend rather than front end but I don't feel
// like dealing with all that rignt now

function userProfile() {

    const [username, setUsername] = useState("");
    const [users, setUsers] = useState([]);
    const [matchedUser, setMatchedUser] = useState(null);
    const [error, setError] = useState("");

    let usernameInput;

    // Load in all users before needing to compare the inputted username across all users.
    useEffect(() => {
        const loadUsers = async () => {
            try {
                const res = await api.getUsers();
                setUsers(Array.isArray(res.data) ? res.data : []);
            } catch (err) {
                console.error('Error loading user profile:', err);
            }
        };

        loadUsers();
    }, []);


    // On submit, we check for input, compare between usernames in database and load send username to load user profile.
    const handleSubmit = (e) => {
        e.preventDefault();
        setMatchedUser(null)
        setError("");

        // trim and standardize username to lowercase to compare to users in database and check for input
        const value = username.trim().toLowerCase();
        if (!value) {
            setError("Please enter a username.");
            return;
        }

        // compare and find username within database and use data to send to LoadUserProfile.jsx
        const findUser = users.find((u) => u.username && u.username.toLowerCase() === value);


        if (!findUser) {
            setError("User not found.");
            return;
        }

        // Username has been found in database and you can now load the user Profile via API and LoadUserProfile.jsx
        setMatchedUser(findUser);
    };

    const handleSaveUser = async (updatedUser) => {
        const res = await api.updateUser(updatedUser.id, updatedUser);
        setMatchedUser(res.data);
    }


    return (
        <>
            <h1>UserProfile</h1>
            <form onSubmit={handleSubmit}>
                <label id="username">Enter Username: </label>
                <input id="username" type="text" value={usernameInput} onChange={(e) => setUsername(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            {/* After submitting the username, all user information will load as will posts by that particular user. */}
            {matchedUser && <LoadUserProfile user={matchedUser} onSave={handleSaveUser} />}


        </>
    )
}

export default userProfile;