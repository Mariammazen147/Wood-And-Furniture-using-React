import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const name = 'hazem'
  const Goback = () => {
    navigate("/",{state:name});
  };
  return (
    <>
      <h1 className="font-color">About</h1>
      <button className="btn bg-custom-darkgreen" onClick={Goback}>Go To Home</button>
    </>
  );
};

export default About;
