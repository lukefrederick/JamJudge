import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReviewCard from './components/SubmitReviews/ReviewCard'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import ChartPage from './components/Charts/ChartPage'
import ReviewPage from './components/SeeReviewPage/ReviewPage'
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ReviewCard" element={<ReviewCard />} />
        <Route path="/About" element={<About />}/>
        <Route path="/ChartPage" element={<ChartPage />}/>
        <Route path="/ReviewPage" element={<ReviewPage />}/>
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App;
