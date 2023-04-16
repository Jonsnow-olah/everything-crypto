import React, {useState, useEffect} from "react";
import Card from "./Card";
import { urlFor, client } from '../../src/client';
import super1 from "../assets/super1.png";


export default function SuperRare() {

  const [superRares, setSuperRares] = useState([])

  useEffect(() => {
    const query = '*[_type == "superRares"]';

    client.fetch(query).then((data) => {
      setSuperRares(data);
    });
  }, []);

 
  return (
    <div className="super-rare" id="superRare">
      <div className="title-container">
        <h2 className="title">LE Super Rare Auction</h2>
        <p className="description">
          We have released four limited edition NFT's early which which can be
          bid on via <a href="#">OpenSea</a>.
        </p>
      </div>
      <div className="cards">
        {superRares.map(( { imgUrl, vendor, title, rate, projectLink }, index) => (
          <Card
            imgUrl={urlFor(imgUrl)}
            vendor={vendor}
            title={title}
            rate={rate}
            projectLink = {projectLink}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}