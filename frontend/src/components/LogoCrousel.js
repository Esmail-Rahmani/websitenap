import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";
import logo10 from "../assets/logo10.png";
import logo11 from "../assets/logo11.webp";
import logo12 from "../assets/logo12.webp";

const images = [
  {
    id: 1,
    logo: logo1,
  },
  {
    id: 2,
    logo: logo2,
  },
  {
    id: 3,
    logo: logo3,
  },
  {
    id: 4,
    logo: logo4,
  },
  {
    id: 5,
    logo: logo5,
  },
  {
    id: 6,
    logo: logo6,
  },
  {
    id: 7,
    logo: logo7,
  },
  {
    id: 8,
    logo: logo8,
  },
  {
    id: 9,
    logo: logo9,
  },
  {
    id: 10,
    logo: logo10,
  },
  {
    id: 11,
    logo: logo11,
  },
  {
    id: 12,
    logo: logo12,
  },
];

const LogoCrousel = () => {
  return (
    <div className="lslider">
      <div className="lslider-track">
        {images &&
          images.map((image) => (
            <div className="lslide">
              <img
                className="logoImage"
                style={{ height: "100px", width: "250px", padding: "5%" }}
                alt={image.id}
                src={image.logo}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default LogoCrousel;
