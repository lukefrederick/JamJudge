import submittedReviewContent from "./SubmittedReviewContent";

function SubmittedReviewCard( { albumName, artistName, rating, reviewContent, onDelete }) {


    return(
        <div className="reviewCard">
            <h2>Album: {albumName}</h2>
            <h3>Artist: {artistName}</h3>
            <h3>Rating: {rating}</h3>
            <h3>Review: {reviewContent}</h3>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default SubmittedReviewCard;



// NEED TO CHANGE THINGS
// add another value to submit with this called bool signedIn and if true, allow delete and edit button and if not true then don't add the buttons.]

