import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Contact = () => {
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
        <div className="row">
          <div className="col-md-6">
            <p
              className={`${
                theme === "dark" ? "font-color-footer" : "font-color"
              } display-4 text-start`}
            >
              Get To Know Us
            </p>
            <form>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div className="input-group">
                <textarea
                  placeholder="Your Message"
                  className="form-control"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className={`btn ${
                  theme === "dark" ? "bg-dark-green font-color-footer" : "bg-light-green"
                }`}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6 text-end">
            <p
              className={`${
                theme === "dark" ? "font-color-footer" : "font-color"
              } display-4`}
            >
              Visit Us
            </p>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27633.940888104542!2d31.204966400000004!3d30.02989685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145843fff459d279%3A0x2cb9665a95d5e7a9!2z2KfZhNio2LHZitivINin2YTZhdi12LHZiSAtINmF2YPYqtioINio2LHZitivINin2YTZhdi52KrZhdiv2YrYqQ!5e0!3m2!1sen!2seg!4v1722858755467!5m2!1sen!2seg"
              width="400"
              height="400"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
