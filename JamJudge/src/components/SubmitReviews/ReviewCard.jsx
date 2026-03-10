import { useState } from 'react';
import submittedReviewContent from '../SeeReviewPage/SubmittedReviewContent';

function ReviewCard() {
    const [album, setAlbum] = useState('');
    const [artist, setArtist] = useState('');
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');

    // State used here to control the input variables and state is cleared on submit
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!album || !artist || !rating || !review) {
            return;
        }

        let newReview = {
            albumName: album,
            artistName: artist,
            rating: rating,
            reviewContent: review
        };

        submittedReviewContent.push(newReview);

        setAlbum('');
        setArtist('');
        setRating('');
        setReview('');
    };

    return (
        <div id="reviewBox">
            <h2>Write a review</h2>
            <form onSubmit={handleSubmit}>
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
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
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