import React from 'react'
// import logo from "../assets/logo.png";
import { BsTelegram, BsTwitter, BsMedium } from "react-icons/bs";
// import { FaTiktok } from "react-icons/fa";

// const links = [
//     {
//       title: "About",
//       data: ["About", "Terms", "Legal"],
//     },
//     // {
//     //   title: "NFT",
//     //   data: ["OpenSea", "Maker", "Learn"],
//     // },
//     {
//       title: "Contact",
//       data: ["Support"],
//     },
//     {
//       title: "Social",
//       data: ["Twiiter", "Instagram"],
//     },
//   ];

  // const socialLink = [
  //   <BsTwitter onClick={() => {}} />,
  //   <BsMedium />,
  //   <BsTelegram />,
  // ];

function Footer() {
  return (
    <footer>
          <div className='upper'>
              <div className='brand-container'>
                  <div className='brand'>
                      {/* <img src={logo} alt='logo' /> */}
                  </div>
                  <p>Our Social links</p>
                  <ul>
                    <a href='medium.com'><li><BsMedium /></li></a>
                    <a href='medium.com'><li><BsTwitter /></li></a>
                    <a href='medium.com'><li><BsTelegram /></li></a>
                      {/* {
                          socialLink.map((link, index) => (
                              <li key={index}>{link}</li>
                          ))
                      } */}
                  </ul>

              </div>

              <div className="links">
                <p><a href='#home'>About Us</a></p>
              </div>

              
        </div>
        <div className="lower">
          <span>&copy; Copyright 2022 Olah</span>

          </div>
      </footer>
  )
}

export default Footer
