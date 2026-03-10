 import Header from './Header.jsx'
import Footer from './Footer.jsx'
import React from 'react';
import { Link } from 'react-router-dom';
import deathmetal from '../assets/deathmetal.jpg';
import gettingKilled from '../assets/gettingKilled.jpg';
import heavymetal from '../assets/heavymetal.jpg';
import koinoyokan from '../assets/koinoyokan.jpg';
import whirr from '../assets/whirr.jpg';
import PhotoCard from './photoCard';

function Home() {
    const photos = [deathmetal, gettingKilled, heavymetal, koinoyokan, whirr];

    return (
        <div className="home">
            <h2>Welcome to JamJudge!</h2>
            <p id="home-paragraph">Welcome to JamJudge! Here you can pick out your favorite (or least favorite) music and 
                submit your rating through our points system. You can provide a review in your own words
                and connect with other music fanatics about your thoughts about all music, new and old.
                Start Jamming today!
            </p>

            <div className="photo-row">
                {photos.map((src, idx) => (
                    <PhotoCard key={idx} src={src} alt={src} />
                ))}
            </div>

            <b/>
            <Link className="homeLink" to="/ReviewCard">Write a Review</Link>
            <b/>
            <p>
            Write a review for the last album you listened to.
            </p>
            <b/>
            <Link className="homeLink" to="/ReviewPage">Read Your Reviews</Link>
            <b/>
            <p>
            Read the reviews that you've already submitted.
            </p>
            <b/>
            <Link className="homeLink" to="/ChartPage">Music Charts</Link>
            <b/>
            <p>
            Check out what others have been enjoying.
            </p>

            

        </div>
    )
}

export default Home;