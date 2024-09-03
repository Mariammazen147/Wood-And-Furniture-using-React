import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

const OpenHours = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={` ${theme === "dark" ? "bg-dark-green" : "bg-light-green"}`}
    >
      <br />
      <p
        className={`text-center display-5 ${
          theme === "dark" ? "font-color-footer" : "font-color"
        }`}
      >
        We Are Open
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div
            className={`card h-100 d-flex align-items-center ${
              theme === "dark" ? "bg-dark-card" : "bg-light-card"
            }`}
          >
            <i
              className={`bi bi-clock mt-2 fs-2 ${
                theme === "dark" ? "font-color-footer" : "font-color"
              }`}
            ></i>
            <h6
              className={`${
                theme === "dark" ? "font-color-footer" : "font-color"
              } size text-center`}
            >
              Monday - Friday <br /> 9:00 - 5:00
            </h6>
          </div>
        </div>
        <div className="col">
          <div
            className={`card h-100 d-flex align-items-center ${
              theme === "dark" ? "bg-dark-card" : "bg-light-card"
            }`}
          >
            <i className={`bi bi-telephone-fill mt-2 fs-2 ${theme === "dark" ? "font-color-footer": "font-color"}`}></i>
            <h6
              className={`${
                theme === "dark" ? "font-color-footer" : "font-color"
              } size text-center`}
            >
              +1 23456789
            </h6>
          </div>
        </div>
        <div className="col">
          <div
            className={`card h-100 d-flex align-items-center ${
              theme === "dark" ? "bg-dark-card" : "bg-light-card"
            }`}
          >
            <i
              className={`bi bi-geo-alt ${
                theme === "dark" ? "font-color-footer" : "font-color"
              } mt-2 fs-2`}
            ></i>
            <h6
              className={`${
                theme === "dark" ? "font-color-footer" : "font-color"
              } size text-center`}
            >
              Mandala Park, 312 Shaw Blvd, <br /> Pleasant Hills, Silvermoon
              Highlands
            </h6>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
export default OpenHours;
