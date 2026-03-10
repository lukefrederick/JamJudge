import React from 'react';
import { Link } from 'react-router-dom';

// Navbar
function Header() {
    return (
        <>
            <h1>Jam Judge</h1>
            <div className="headerLinks">
                
                <Link className="headerLink" to="/">Home</Link>
                <Link className="headerLink" to="/About">About</Link>
                <Link className="headerLink" to="/ReviewCard">Review</Link>
                <Link className="headerLink" to="/ChartPage">Charts</Link>
                <Link className="headerLink" to="/ReviewPage">Your Reviews</Link>
            </div>
        </>
    )
}

export default Header;