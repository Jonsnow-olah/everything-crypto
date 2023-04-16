import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import Footer from './components/Footer'
import Free from './components/Free'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Release from './components/Release'
import Release2 from './components/Release2'
import ScrollToTop from './components/ScrollToTop'
import Signup from './components/Signup'
import SuperRare from './components/SuperRare'

import "./scss/index.scss"
import SuperRare2 from './components/SuperRare2'

const App = () => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .release,
        .super-rare,
        .release2
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    
    
        <div data-theme={theme} className='app-container'>
          <Navbar changeTheme={changeTheme} currentTheme={theme} />

          <Home />
          <Release />
          {/* <Free /> */}
          <SuperRare/>
          <Release2 />
          <SuperRare2 />
          <Signup />
          <Footer />
          <ScrollToTop />
        </div>
      
  )
}

export default App
