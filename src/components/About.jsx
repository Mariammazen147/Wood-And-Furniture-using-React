import React from "react";
import people1 from "../assets/images/people1.png";
import people2 from "../assets/images/people2.png";
import { useContext } from "react";
import { ThemeContext } from "../App";

const About = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`background-container ${
        theme === "dark"
          ? "background-dark-container"
          : "background-light-container"
      }`}
    >
      <div className=" overlay-content">
        <div className=" d-flex justify-content-between align-content-center">
          <div
            className={`col-5 card ${
              theme === "dark" ? "bg-dark-card" : "bg-light-card"
            }`}
          >
            <p
              className={`${
                theme === "dark" ? "font-color-footer" : "font-color"
              } display-4`}
            >
              Who are we?
            </p>
            <p
              style={{ fontSize: "20px" }}
              className={`${
                theme === "dark" ? "font-color-footer" : "font-color"
              }`}
            >
              We are the Best Furniture Dealers
            </p>
            <p
              className={`${
                theme === "dark" ? "font-color-footer" : "font-color"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className=" d-flex align-items-start">
              <button
                className={`${
                  theme === "dark" ? "bg-dark-darkgreen" : "bg-light-darkgreen"
                } btn`}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="col-5">
            <img className="img-fluid" src={people1} alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-5">
            <img className="img-fluid" src={people2} alt="" />
          </div>
          <div
            className={`col-5 card ${
              theme === "dark" ? "bg-dark-card" : "bg-light-card"
            }`}
          >
            <p
              className={`display-5 ${
                theme === "dark" ? "font-color-footer" : "font-color"
              }`}
            >
              Get yours today
            </p>
            <p
              style={{ fontSize: "20px" }}
              className={`${
                theme === "dark" ? "font-color-footer" : "font-color"
              }`}
            >
              Get your chair in four easy steps...
            </p>
            <div className="container mt-3">
              <div className="row justify-content-center align-items-center">
                <div
                  className={`col-auto ${
                    theme === "dark" ? "step-dark" : "step-light"
                  }`}
                >
                  <div
                    className={`${
                      theme === "dark" ? "circle-dark" : "circle-light"
                    }`}
                  >
                    <i className="bi bi-telephone"></i>
                  </div>
                  <p>Order</p>
                </div>
                <div
                  className={`col-auto step-segment ${
                    theme === "dark"
                      ? "step-segment-dark"
                      : "step-segment-light"
                  }`}
                >
                  <div className=" line"></div>
                </div>
                <div
                  className={`col-auto ${
                    theme === "dark" ? "step-dark" : "step-light"
                  }`}
                >
                  <div
                    className={`${
                      theme === "dark" ? "circle-dark" : "circle-light"
                    }`}
                  >
                    <i className="bi bi-hammer"></i>
                  </div>
                  <p>Build</p>
                </div>
                <div
                  className={`col-auto step-segment ${
                    theme === "dark"
                      ? "step-segment-dark"
                      : "step-segment-light"
                  }`}
                >
                  <div className=" line"></div>
                </div>
                <div
                  className={`col-auto ${
                    theme === "dark" ? "step-dark" : "step-light"
                  }`}
                >
                  <div
                    className={`${
                      theme === "dark" ? "circle-dark" : "circle-light"
                    }`}
                  >
                    <i className="bi bi-truck"></i>
                  </div>
                  <p>Pick-up</p>
                </div>
                <div
                  className={`col-auto step-segment three-dots ${
                    theme === "dark"
                      ? "step-segment-dark three-dots-dark"
                      : "step-segment-light three-dots-light"
                  }`}
                >
                  <div className=" dot"></div>
                  <div className=" middle-dot"></div>
                  <div className=" dot"></div>
                </div>
                <div
                  className={`col-auto ${
                    theme === "dark" ? "step-dark" : "step-light"
                  }`}
                >
                  <div
                    className={`${
                      theme === "dark" ? "circle-dark" : "circle-light"
                    }`}
                  >
                    <i className="bi bi-truck"></i>
                  </div>
                  <p>Deliver</p>
                </div>
                <div className=" d-flex align-items-start">
                  <button
                    className={`${
                      theme === "dark"
                        ? "bg-dark-darkgreen"
                        : "bg-light-darkgreen"
                    } btn`}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
