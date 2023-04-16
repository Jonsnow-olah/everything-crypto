import React from "react";
import superEth from "../assets/supereth.png";
export default function Card2({ imgUrl, vendor, rate, projectLink }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imgUrl} alt="super1" />
      </div>
      <div className="card-content">
        <div className="card-heading">
          <span className="card-series">{vendor}</span>
          <span className="card-top">Crypto Vendor</span>
        </div>
        <div className="card-details">
          <h4 className="card-title">Rate - </h4>
          <div className="card-price">
            <img src={superEth} alt="super eth" />
            <h4>{rate} /$</h4>
          </div>
        </div>
        <div className="card-sub-details">
         
          <button><a href={projectLink} target="_blank" rel="noreferrer" className="link">
          Sell Now
          </a></button>
        </div>
      </div>
    </div>
  );
}

