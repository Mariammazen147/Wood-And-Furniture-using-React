import React from "react";
import { useContext } from "react";
import furniture from "../assets/images/furniture.png";
import { ThemeContext } from "../App";

const BestSellingPackages = () => {
  const bestSellingPackages = [
    {
      title: "Simple Package",
      price: "Php 5,000.00",
      description:
        "Some quick example text to build on the card title and make...",
      image: furniture,
    },
    {
      title: "Double Package",
      price: "Php 5,000.00",
      description:
        "Some quick example text to build on the card title and make...",
      image: furniture,
    },
    {
      title: "Prime Package",
      price: "Php 5,000.00",
      description:
        "Some quick example text to build on the card title and make...",
      image: furniture,
    },
    {
      title: "Special Package",
      price: "Php 5,000.00",
      description:
        "Some quick example text to build on the card title and make...",
      image: furniture,
    },
    {
      title: "Best Package",
      price: "Php 5,000.00",
      description:
        "Some quick example text to build on the card title and make...",
      image: furniture,
    },
    {
      title: "Simple Package",
      price: "Php 5,000.00",
      description:
        "Some quick example text to build on the card title and make...",
      image: furniture,
    },
    {
      title: "Double Package",
      price: "Php 5,000.00",
      description:
        "Some quick example text to build on the card title and make...",
      image: furniture,
    },
    {
      title: "Prime Package",
      price: "Php 5,000.00",
      description:
        "Some quick example text to build on the card title and make...",
      image: furniture,
    },
    {
      title: "Special Package",
      price: "Php 5,000.00",
      description:
        "Some quick example text to build on the card title and make...",
      image: furniture,
    },
    {
      title: "Best Package",
      price: "Php 5,000.00",
      description:
        "Some quick example text to build on the card title and make...",
      image: furniture,
    },
  ];

  const theme = useContext(ThemeContext);

  return (
    <div
      className={` background-container ${
        theme === "dark"
          ? "background-dark-container"
          : "background-light-container"
      }`}
    >
      <div className="overlay-content">
        <p
          className={`display-4 text-center ${
            theme === "dark" ? "font-color-footer" : "font-color"
          }`}
        >
          Best Selling Packages
        </p>
        <p
          className={`text-center ${
            theme === "dark" ? "font-color-footer" : "font-color"
          }`}
        >
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s...
        </p>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3">
          {bestSellingPackages.map((pkg, index) => (
            <div className="col" key={index}>
              <div
                className={`card-10 h-100 mx-auto ${
                  theme === "dark" ? "bg-dark-card" : "bg-light-card"
                }`}
              >
                <img src={pkg.image} className="card-img-top" alt={pkg.title} />
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
                  <button
                    className={`${
                      theme === "dark"
                        ? "bg-dark-darkgreen"
                        : "bg-light-darkgreen"
                    } btn`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingPackages;
