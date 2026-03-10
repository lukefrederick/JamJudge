function PhotoCard({ src, alt }) {
    return (
        <div className="photo-div">
            <img className="photo-item" src={src} alt={alt} />
        </div>
    );
}

export default PhotoCard;