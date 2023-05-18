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
                    <a href='https://medium.com/@olahisrael07'><li><BsMedium /></li></a>
                    <a href='#'><li><BsTwitter /></li></a>
                    <a href='https://t.me/jonsnowcrypto'><li><BsTelegram /></li></a>
                      {/* {
                          socialLink.map((link, index) => (
                              <li key={index}>{link}</li>
                          ))
                      } */}
                  </ul>

              </div>

              <div className="links">
                <p><a href='https://mangrove-lemongrass-1f7.notion.site/About-Us-1bee1663cd0f49fd80be35d3fc945271'>About Us</a></p>
              </div>

              
        </div>
        <div className="lower">
          <span>&copy; Copyright 2022 E-Crypto</span>

          </div>
      </footer>
  )
}

export default Footer
