import React from "react";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";

const NavBar = ({ theme, setTheme }) => {
  const toggleTheme =(color)=>{ 
    let layoutTheme =document.body.dataset['bsTheme']
    console.log(layoutTheme);
    
    document.body.dataset['bsTheme']=layoutTheme=='dark'?'light':'dark'
  }
  return (
    <>
      <div
        className={`container-fluid ${
          theme === "dark" ? "bg-dark-green" : "bg-light-green"
        }`}
      >
        <div className="d-flex gap-3 flex-wrap justify-content-between">
          <div>
            <ul className="nav d-flex w-100">
              <li className="nav-item">
                <a href="/">
                  <img
                    src={theme === "dark" ? logo2 : logo}
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="nav d-flex w-100 justify-content-end">
              <li className="nav-item">
                <a
                  className={`${
                    theme === "dark" ? "font-color-footer" : "font-color"
                  } nav-link`}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${
                    theme === "dark" ? "font-color-footer" : "font-color"
                  } nav-link`}
                  href="/About"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${
                    theme === "dark" ? "font-color-footer" : "font-color"
                  } nav-link`}
                  href="/Shop"
                >
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${
                    theme === "dark" ? "font-color-footer" : "font-color"
                  } nav-link`}
                  href="/Checkout"
                >
                  Checkout
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${
                    theme === "dark" ? "font-color-footer" : "font-color"
                  } nav-link`}
                  href="/Store"
                >
                  Store
                </a>
              </li>
            </ul>
          </div>
          <button
            className={`${
              theme === "dark" ? "bg-dark-green font-color-footer" : "bg-light-green font-color"
            } btn`}
            onClick={() => {
               setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            Toggle theme
          </button>
        </div>
      </div>
    </>
  );
};
export default NavBar;
