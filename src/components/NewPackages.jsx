import React, { useContext } from "react";
import furniture from "../assets/images/furniture.png";
import { ThemeContext } from "../App";

const newpackages = [
  {
    img: furniture,
    title: "Simple Package",
    price: "Php 5,000.00",
    description: "Lorem ipsum ist dolor amit",
  },
  {
    img: furniture,
    title: "Organic Package",
    price: "Php 5,000.00",
    description: "Lorem ipsum ist dolor amit",
  },
  {
    img: furniture,
    title: "White Package",
    price: "Php 5,000.00",
    description: "Lorem ipsum ist dolor amit",
  },
  {
    img: furniture,
    title: "Double Package",
    price: "Php 5,000.00",
    description: "Lorem ipsum ist dolor amit",
  },
  {
    img: furniture,
    title: "Yellow Package",
    price: "Php 5,000.00",
    description: "Lorem ipsum ist dolor amit",
  },
];

const PackagesComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={` ${theme === "dark" ? "bg-dark-green" : "bg-light-green"}`}
    >
      <p
        className={`display-4 text-center ${
          theme === "dark" ? "font-color-footer" : "font-color"
        }`}
      >
        New Packages
      </p>
      <p
        className={`text-center ${
          theme === "dark" ? "font-color-footer" : "font-color"
        }`}
      >
        Lorem ipsum has been the industry's dummy text ever since the 1500s
      </p>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
        {newpackages.map((pkg, index) => (
          <div className="col" key={index}>
            <div
              className={`card-10 h-100 mx-auto ${
                theme === "dark" ? "bg-dark-card" : "bg-light-card"
              }`}
            >
              <img src={pkg.img} className="card-img-top" alt={pkg.title} />
              <div className="card-body text-center">
                <h5
                  className={`card-title ${
                    theme === "dark" ? "font-color-footer" : "font-color"
                  }`}
                >
                  {pkg.title}
                </h5>
                <p
                  className={` ${
                    theme === "dark" ? "font-color-footer" : "font-color"
                  }`}
                >
                  {pkg.price}
                </p>
                <p
                  className={` ${
                    theme === "dark" ? "font-color-footer" : "font-color"
                  }`}
                >
                  {pkg.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesComponent;
