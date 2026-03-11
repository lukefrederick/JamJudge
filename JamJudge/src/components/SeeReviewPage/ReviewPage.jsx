import SubmittedReviewCard from "./SubmittedReviewCard"
import { useState, useEffect } from 'react';
import { getPosts, deletePost } from "../../api";

// Conditional rendering used here so that the user may switch between lowest and highest rated albums
function ReviewPage() {

    const [sort, setSort] = useState('descending');
    const [submittedReviewContent, setSubmittedReviewContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    
    // Getting posts from the database
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getPosts();
                setSubmittedReviewContent(response.data);
            } catch (err) {
                setError("Failed to load posts.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);


    // Deleting a post from the database.
    const handleDelete = async(id) => {
        try {
            await deletePost(id);
            setSubmittedReviewContent(prev => prev.filter(post => post.id !== id));
        }
        catch(err) {
            console.error("Failed to delete post: ", err);
        }
    }
    

    // Sorts out the posts from rating high to low
    const sortedReviewContent = [...submittedReviewContent].sort((a, b) => {
        return sort === 'ascending' ? a.rating - b.rating : b.rating - a.rating;
    })


    // Sets variables to be passed into SubmittedReviewCard.jsx so it can render properly
    const formattedReviewContent = submittedReviewContent.map((post) => ({
        id: post.id,
        albumName: post.albumName,
        artistName: post.artistName,
        rating: post.rating,
        reviewContent: `Reviewed by ${post.user?.username ?? "Unknown user"} on ${new Date(post.createdAt).toLocaleDateString()}`,
    }));

    // If error when getting data, displays "Failed to load posts"
    if (error) {
        return <p>{error}</p>;
    }

    // Sends data to SubmittedReviewCards and renders for all reviews in database
    return (
        <div id="ReviewPage">
            <h1>Album Reviews</h1>

            <button onClick={() => setSort(sort === 'ascending' ? 'descending' : 'ascending')}>{sort}</button>

            {formattedReviewContent.map((album) => (
                <SubmittedReviewCard
                    key={album.id}
                    albumName={album.albumName}
                    artistName={album.artistName}
                    rating={album.rating}
                    reviewContent={album.reviewContent}
                    onDelete={() => handleDelete(album.id)}
                />
                
            ))}
        </div>
    )
}

export default ReviewPage