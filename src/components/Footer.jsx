import React from "react";
import logo2 from "../assets/images/logo2.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import youtube from "../assets/images/youtube.png";


const Footer = () => (
  <div className="footer bg-footer">
    <div className="row row-cols-3">
      <div>
        <p className="font-color-footer" style={{ whiteSpace: "pre-line" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aliquam cum amet saepe. Vero quas recusandae rerum, omnis laudantium,
          est voluptates veritatis, molestias distinctio placeat minus. Eum
          labore a minus?
        </p>
      </div>
      <div className=" d-flex gap-3 flex-wrap">
        <div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a class="nav-link font-color-footer" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-color-footer" href="index.html">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-color-footer" href="index.html">
                Checkout
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-color-footer" href="index.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
        <ul className="nav flex-column">
            <li className="nav-item">
              <a class="nav-link font-color-footer" href="index.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-color-footer" href="index.html">
                Help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-color-footer" href="index.html">
                Terms
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-color-footer" href="index.html">
                Guidelines
              </a>
            </li>
          </ul>
        </div>
        <div>
        <ul className="nav flex-column">
            <li className="nav-item">
              <a class="nav-link font-color-footer" href="index.html">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-color-footer" href="index.html">
                Certifications
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className=" font-color-footer">Stay in touch with us for the freshest products!</p>
        <div className="input-group">
          <input type="text" placeholder="Email"/>
          <button className="btn btn-danger" type="submit">Send</button>
        </div>
      </div>
    </div>
    <div className="line">
      <hr className="display-4 text-center border-3 border-white"></hr>
    </div>
    <div className="row row-cols-2 justify-content-between">
      <div>
        <img src={logo2} alt=""/>
      </div>
      <div class="text-end">
            <a href="index.html"><img height="40" width="40" class="img-rounded" src={facebook} alt=""/></a>
            <a href="index.html"><img height="40" width="40" class="img-rounded" src={twitter} alt=""/></a>
            <a href="index.html"><img height="40" width="40" class="img-rounded" src={instagram} alt=""/></a>
            <a href="index.html"><img height="40" width="40" class="img-rounded" src={youtube}alt=""/></a>
        </div>
    </div>
  </div>
);

export default Footer;
