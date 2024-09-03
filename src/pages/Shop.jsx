import React from "react";
import { useNavigate } from "react-router-dom";

const Shop =()=>{
    const navigate = useNavigate();
    const Goback =()=>{
        navigate("/");
    }
    return (
        <>
        <h1 className="font-color">Shop</h1>
        <button className="btn bg-custom-darkgreen" onClick={Goback}>Back To Home</button>
        </>
    )
};
export default Shop;