import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const Goback = () => {
    navigate("/");
  };
  return (
    <>
      <h1 className="font-color">Checkout</h1>
      <button className="btn bg-custom-darkgreen" onClick={Goback}>Go To Home</button>
    </>
  );
};

export default Checkout;
