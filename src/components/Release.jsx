import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import release2 from "../assets/release2.png";
import { urlFor, client } from '../../src/client';
import Card from "./Card";

function Release() {

  const [releases, setReleases] = useState([])

  useEffect(() => {
    const query = '*[_type == "releases"]';

    client.fetch(query).then((data) => {
      setReleases(data);
    });
  }, []);

  return (
    <div className="releases" id="release">
      {releases.map((release, index) => (
        <div className="release orange"
          key={release.title + index}
        >
        <div className="content">
          <h2 className="title">{release.title}</h2>
            <p className="description">
              {release.description}
            </p>
            <a href={release.projectLink} target="_blank" rel="noreferrer" className="link">
              Check out the course <BsArrowRight />
            </a>
        </div>
        <div className="image">
          <img src={urlFor(release.imgUrl)} alt="image" />
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

export default Release
