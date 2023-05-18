import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import release2 from "../assets/release2.png";
import { urlFor, client } from '../../src/client';
import Card from "./Card";

function Release2() {

  const [releases2, setReleases2] = useState([])

  useEffect(() => {
    const query = '*[_type == "releases2"]';

    client.fetch(query).then((data) => {
      setReleases2(data);
    });
  }, []);

  return (
    <div className="releases" id="release">
      {releases2.map((release2, index) => (
        <div className="release orange"
          key={release2.title + index}
        >
        <div className="content">
          <h2 className="title">{release2.title}</h2>
            <p className="description">
              {release2.description}
            </p>
            <a href={release2.projectLink} target="_blank" rel="noreferrer" className="link">
              Check my Youtube Channel out <BsArrowRight />
            </a>
        </div>
        <div className="image">
          <img src={urlFor(release2.imgUrl)} alt="image" />
          <div className="ellipse pink"></div>
        </div>
      </div>

      ))}
        
      {/* <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div> */}
        {/* <div className="content">
          <h2 className="title">Initial Release 4/11</h2>
          <p className="description">
            We have released four limited edition NFTs early which can be bid on
            via <a href="#">OpenSea</a>
          </p>
          <p className="description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">50% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default Release2
