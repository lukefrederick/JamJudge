import PhotoCard from '../photoCard';

function ChartCard({ rank, album, image, releaseDate, genre }) {
  return (
    <div className="chart-card">
      <h3 className="chart-rank">#{rank}</h3>
      <PhotoCard
        src={image || "/placeholder.jpg"}
        alt={`${album} cover`}
      />
      <div className="chart-info">
        <h3 className="chart-album">{album}</h3>
        <p className="chart-release">Released: {releaseDate || "N/A"}</p>
        <p className="chart-genre">Genre: {genre || "N/A"}</p>
      </div>
    </div>
  );
}

export default ChartCard;