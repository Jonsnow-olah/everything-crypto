import React from 'react'
import super1 from "../assets/super1.png";

function Signup() {
  return (
    <div className="signup">
    <div className="container">
      <div className="content">
        <p className="sub-title">Don't miss Important updates!</p>
        <h1 className="title">Join a crypto community today!</h1>
        <p className="description">
          Joining a crypto community accelerates your growth and gives you an edge
          to make more money on the crypto space. Meet new people, Connect, ask questions, make money together.
        </p>
        <a href='https://t.me/jonsnowcrypto'><button>Join Now!</button></a>
      </div>
      {/* <div className="image-container">
        <div className="image">
          <img src={super1} alt="home image" />
        </div> */}
        {/* <div className="ellipse-container">
          <div className="ellipse pink"></div>
          <div className="ellipse orange"></div>
        </div>
      </div>
    </div> */}
   </div>
   </div>
  )
}

export default Signup
