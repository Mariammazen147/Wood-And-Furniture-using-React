import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Checkout from "./pages/Checkout.jsx";
import Store from "./pages/Store.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

export const ThemeContext = createContext("light");

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <NavBar theme={theme} setTheme={setTheme}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/products/:heloooo/:id" element={<ProductDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Store" element={<Store />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
