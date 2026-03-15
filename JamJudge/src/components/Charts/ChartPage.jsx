// Should loop through the data from ChartData.jsx and genererate 10 chart cards with the respective data.
// This will be a table so that I have that included

import { useEffect, useState } from "react";
import { searchDiscogsAlbums } from "../../api";
import ChartCard from "./ChartCard";

function ChartPage() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await searchDiscogsAlbums({ page: 1, perPage: 25 });
        setAlbums(res.data.results);
      } catch (err) {
        setError("Failed to load charts.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) return <p>Loading charts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="chart-page">
      <h1>Top Albums</h1>
      <div className="chart-list">
        {albums.map((album, index) => (
          <ChartCard
            key={album.id}
            rank={index + 1}
            artist={album.artist ?? "Unknown Artist"}
            album={album.title ?? "Unknown Album"}
            image={album.cover_image}
            releaseDate={album.year}
            genre={
              Array.isArray(album.genre) && album.genre.length > 0
                ? album.genre.join(", ")
                : "N/A"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ChartPage;