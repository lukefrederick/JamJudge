import submittedReviewContent from "./SubmittedReviewContent";

function SubmittedReviewCard( { albumName, artistName, rating, reviewContent, onDelete, deleteReviewBool }) {


    return(
        <div className="reviewCard">
            <h2>Album: {albumName}</h2>
            <h3>Artist: {artistName}</h3>
            <h3>Rating: {rating}</h3>
            <h3>Review: {reviewContent}</h3>
            {deleteReviewBool && <button onClick={onDelete}>Delete</button>} {/* Will only render if deleteReviewBool is true */}
        </div>
    )
}

export default SubmittedReviewCard;




