import PhotoCard from '../photoCard';

function ChartCard({ rank, artist, album, image, releaseDate }) {
  return (
    <div className="chart-card">
      <span className="chart-rank">#{rank}</span>
      <PhotoCard
        src={image || "/placeholder.jpg"}
        alt={`${album} cover`}
      />
      <div className="chart-info">
        <h3 className="chart-album">{album}</h3>
        <p className="chart-artist">{artist}</p>
        <p className="chart-release">Released: {releaseDate || "N/A"}</p>
      </div>
    </div>
  );
}

export default ChartCard;