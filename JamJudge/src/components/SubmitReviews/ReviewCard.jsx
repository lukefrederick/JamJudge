import { useState, useEffect } from 'react';
import * as api from '../../api';


function ReviewCard() {
    const [album, setAlbum] = useState('');
    const [artist, setArtist] = useState('');
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);

    // Load all users to compare username to database for setting id
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


    // State used here to control the input variables and state is cleared on submit
    const handleSubmit = async(event) => {
        event.preventDefault();
        setError('');
            

        // Check for input. If not, error.
        if (!album || !artist || !rating || !review || !username) {
            setError("Please fill out fields")
            return;
        }

        const value = username.trim().toLowerCase();
        const findUser = users.find((u) => u.username && u.username.toLowerCase() === value);

        // Username was not found so clears username form and returns.
        if (!findUser) {
            setError("User not found.");
            setUsername('');
            return;
        }

        // Content to be posted to the database
        const newReview = {
            albumName: album.trim(),
            artistName: artist.trim(),
            rating: Number(rating),
            reviewContent: review.trim(),
            user: {
                id: findUser.id
            }
        };
        
        console.log(newReview);

        try {
            await api.createPost(newReview);

            // clear review content after posted to backend.
            setAlbum('');
            setArtist('');
            setRating('');
            setReview('');
            setUsername('');
        }
        catch (err) {
            console.error('Failed to submit review: ', err);
            setError("Failed to submit review")
        } 
    };

    return (
        <div id="reviewBox">
            <h2>Write a review</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input className="form-control" type="text" id="username" name="username" maxLength="100" value={username} onChange={(event) => setUsername(event.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="album" className="form-label">Album Title:</label>
                    <input className="form-control" type="text" id="album" name="album" maxLength ="900" value={album} onChange={(event) => setAlbum(event.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="artist" className="form-label">Artist Name:</label>
                    <input className="form-control" type="text" id="artist" name="artist" maxLength="100" value={artist} onChange={(event) => setArtist(event.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="rating" className="form-label">Rating (1-10):</label>
                    <select className="form-control" id="rating" name="rating" value={rating} onChange={(event) => setRating(event.target.value)} required>
                        <option value="">Select a rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="review" className="form-label">Review:</label>
                    <textarea className="form-control" id="review"  maxLength ="2000" name="review" rows="4" value={review} onChange={(event) => setReview(event.target.value)} required/>
                </div>

                <div className="form-group">
                    <div className="form-label" />
                    <button type="submit">Submit Review</button>
                </div>
            </form>
        </div>
    )
}


export default ReviewCard;