import React from 'react'
// import logo from "../assets/logo.png";
import { BsTelegram, BsTwitter, BsMedium } from "react-icons/bs";
// import { FaTiktok } from "react-icons/fa";

const links = [
    {
      title: "About",
      data: ["About", "Terms", "Legal"],
    },
    // {
    //   title: "NFT",
    //   data: ["OpenSea", "Maker", "Learn"],
    // },
    {
      title: "Contact",
      data: ["Support"],
    },
    {
      title: "Social",
      data: ["Twiiter", "Instagram"],
    },
  ];

  const socialLink = [
    <BsTwitter />,
    <BsMedium />,
    <BsTelegram />,
  ];

function Footer() {
  return (
    <footer>
        <div className='upper'>
            <div className='brand-container'>
                <div className='brand'>
                    {/* <img src={logo} alt='logo' /> */}
                </div>
                <p>Exclusive Nft collevtion</p>
                <ul>
                    {
                        socialLink.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022 Olah</span>

        </div>
    </footer>
  )
}

export default Footer
