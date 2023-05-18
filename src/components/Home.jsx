import React from 'react'
import home from "../assets/home.png"
import { Link } from 'react-scroll';

function Home() {



  return (
    <div className="home" id='home'>
      <div className="container">
        <div className="content">
          <p className="sub-title">Welcome to our Crypto Platform!</p>
          <h1 className="title">A Platfrom like no other</h1>
          <p className="description">
          We provide a user-friendly platform where you can learn about the world of cryptocurrency as a beginner,
          as well as buy and sell crypto through peer-to-peer transactions.
          </p>
          <Link to="release" smooth={true} duration={500}>
          <button>Get Started</button>
          </Link>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
