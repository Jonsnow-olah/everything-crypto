import React, {useState, useEffect} from "react";
import Card2 from "./Card2";
import { urlFor, client } from '../client';
import super1 from "../assets/super1.png";


export default function SuperRare2() {

  const [superRares2, setSuperRares2] = useState([])

  useEffect(() => {
    const query = '*[_type == "superRares2"]';

    client.fetch(query).then((data) => {
      setSuperRares2(data);
    });
  }, []);

 
  return (
    <div className="super-rare" id="superRare2">
      <div className="title-container">
        <h2 className="title">LE Super Rare Auction</h2>
        <p className="description">
          We have released four limited edition NFT's early which which can be
          bid on via <a href="#">OpenSea</a>.
        </p>
      </div>
      <div className="cards">
        {superRares2.map(( { imgUrl, vendor, title, rate, projectLink }, index) => (
          <Card2
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