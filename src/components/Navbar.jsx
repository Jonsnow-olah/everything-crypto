import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdClose} from "react-icons/md";
import {ImSun} from "react-icons/im"
import {BsFillMoonFill} from "react-icons/bs";
// import logo from "../assets/logo.png";

function Navbar({changeTheme, currentTheme}) {
    const [navState, setNavState] = useState(false);
  return (
    <nav>
        <div className="brand-container">
            <div className="brand">
                {/* <img src={logo} alt='logo'/> */}
               <p className="sub-title">E-Crypto </p>

            </div>

            <div className="toggle-container">
                <div className="toggle">
                {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
                </div>
                <div className="mode" onClick={changeTheme}>
                {currentTheme === 'dark' ? <ImSun className="light" /> : <BsFillMoonFill className="dark" />}
                </div>
            </div>
        </div>

        <div className={`links-container ${navState ? "nav-visible" : ""}`}>
            <ul className="links">
                <li>
                    <a href="#superRare">Buy Crypto</a>
                </li>
                <li>
                    <a href="#superRare2">Sell Crypto</a>
                </li>
                <li>
                    <a href="#release">Learn Crypto</a>
                </li>
                <li>
                    <a href="https://mangrove-lemongrass-1f7.notion.site/About-Us-1bee1663cd0f49fd80be35d3fc945271">About Us</a>
                </li>
                <li onClick={changeTheme}>
                    {currentTheme === 'dark' ? <ImSun className="light" /> : <BsFillMoonFill className="dark" />}
                </li>
            </ul>

        </div>
      
    </nav>
  )
}

export default Navbar
