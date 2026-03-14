// Should loop through the data from ChartData.jsx and genererate 10 chart cards with the respective data.
// This will be a table so that I have that included

import ChartData from './ChartData.js'

function ChartPage() {

    return (
        <>
            <h2>Charts - Here's What People are Listening to Right Now</h2>
            <table id="chart-table">
                <thead>
                    <tr>
                        <th>Album Name</th>
                        <th>Artist</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {ChartData.map((album) => (
                        <tr key={album.albumName}>
                            <td><a href={album.link} target="_blank">{album.albumName}</a></td>
                            <td>{album.artistName}</td>
                            <td>{album.releaseDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ChartPage;