import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import "./Assets/style/style.scss";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";

export const productContext = React.createContext();
export const cartContext = React.createContext();

function App() {
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <productContext.Provider value={products}>
              <Home />
            </productContext.Provider>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
