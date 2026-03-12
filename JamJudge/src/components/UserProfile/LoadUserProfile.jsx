import { useEffect, useState } from "react"

function LoadUserProfile({ user, onSave }) {

    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(user);


    useEffect(() => {
        setDraft(user);
        setIsEditing(false);
    }, [user]);

    if (!user) {
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDraft((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        await onSave?.(draft);
        setIsEditing(false);
    };

    const handleCancel = async () => {
        setDraft(user);
        setIsEditing(false);
    };




    return (
        <div className="profileCard">
            <h2>
                {isEditing ? (
                    <input name="username"value={draft.username ?? ""}onChange={handleChange}/>) : (user.username)}
            </h2>

            <p>ID: {user.id}</p>

            <p>
                First Name:{" "}
                {isEditing ? (
                    <input name="firstName" value={draft.firstName ?? ""}onChange={handleChange}/>) : (user.firstName)}
            </p>

            <p>
                Last Name:{" "}
                {isEditing ? (<input name="lastName" value={draft.lastName ?? ""} onChange={handleChange}/>) : (user.lastName)}
            </p>

            <p>
                Email:{" "}
                {isEditing ? (<input name="email" value={draft.email ?? ""} onChange={handleChange}/>) : (user.email)}
            </p>

            {!isEditing ? (
                <button type="button" onClick={() => setIsEditing(true)}>Edit</button>) : (
                <>
                    <button type="button" onClick={handleSave}>Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </>
            )}

            <h3>Posts</h3>
        </div>
    );
}

export default LoadUserProfile;