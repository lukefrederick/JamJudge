function LoadUserProfile ({ user }) {

    if (!user) {
        return null;
    }

    return (
        <div className="profileCard" >

            <h2>{user.username}</h2>
            <p>ID: {user.id}</p>
            <p>First Name: {user.firstName}</p>
            <p>Last name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <h3>Posts</h3>

        </div>
    )
}

export default LoadUserProfile;