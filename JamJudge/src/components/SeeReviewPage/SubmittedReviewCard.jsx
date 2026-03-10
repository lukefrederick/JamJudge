import submittedReviewContent from "./SubmittedReviewContent";

function SubmittedReviewCard( { albumName, artistName, rating, reviewContent }) {


    return(
        <div className="reviewCard">
            <h2>Album: {albumName}</h2>
            <h3>Artist: {artistName}</h3>
            <h3>Rating: {rating}</h3>
            <h3>Review: {reviewContent}</h3>
        </div>
    )
}

export default SubmittedReviewCard;

