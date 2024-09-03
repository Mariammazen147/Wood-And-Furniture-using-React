import React from "react";
import Banner from "../components/Banner.jsx";
import OpenHours from "../components/OpenHours.jsx";
import About from "../components/About.jsx";
import PackagesComponent from "../components/NewPackages.jsx";
import BestSelling from "../components/BestSelling.jsx";
import Reviews from "../components/Reviews.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import { useLocation } from "react-router-dom";

const Home = () => {
  const {state} = useLocation()
  return (
    <>
      <Banner />
      <OpenHours />
      <About />
      <PackagesComponent />
      <BestSelling />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
