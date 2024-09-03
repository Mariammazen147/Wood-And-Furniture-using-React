import React from "react";
import { useNavigate } from "react-router-dom";

const Store = () => {
  const navigate = useNavigate();
  const Goback = () => {
    navigate("/");
  };
  return (
    <>
      <h1 className="font-color">Store</h1>
      <button className="btn bg-custom-darkgreen" onClick={Goback}>Go To Home</button>
    </>
  );
};

export default Store;
