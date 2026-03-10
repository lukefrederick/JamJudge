import SubmittedReviewCard from "./SubmittedReviewCard"
import { useState, useEffect } from 'react';
import { getPosts } from "../../api";

// Conditional rendering used here so that the user may switch between lowest and highest rated albums
function ReviewPage() {

    const [sort, setSort] = useState('descending');
    const [submittedReviewContent, setSubmittedReviewContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    

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
    
    const sortedReviewContent = [...submittedReviewContent].sort((a, b) => {
        return sort === 'ascending' ? a.rating - b.rating : b.rating - a.rating;
    })

    const formattedReviewContent = submittedReviewContent.map((post) => ({
        id: post.id,
        albumName: post.albumName,
        artistName: post.artistName,
        rating: post.rating,
        reviewContent: `Reviewed by ${post.user?.username ?? "Unknown user"} on ${new Date(post.createdAt).toLocaleDateString()}`,
    }));

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div id="ReviewPage">
            <h1>Album Reviews</h1>

            <button onClick={() => setSort(sort === 'ascending' ? 'descending' : 'ascending')}>{sort}</button>

            {formattedReviewContent.map((album) => (
                <SubmittedReviewCard
                    key={album.albumName}
                    albumName={album.albumName}
                    artistName={album.artistName}
                    rating={album.rating}
                    reviewContent={album.reviewContent}
                />
                
            ))}
        </div>
    )
}

export default ReviewPage