import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import mainImg from "../assets/images/mainImg.png";

const Banner = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="col-12">
      <div className="text-center position-relative">
        <img className="img-fluid w-100" src={mainImg} alt="" />
        <div className="overlay-text">
          <h1>
            Wood and <span className="font">Furniture</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button
            className={` ${
              theme === "dark"
                ? "bg-dark-green font-color-footer"
                : "bg-light-green font-color"
            } btn rounded`}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
