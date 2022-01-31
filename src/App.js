// import db from "./products";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Assets/style/style.scss";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Shop from "./Pages/Shop/Shop";
import Products from "./Pages/Products/Products";
import Article from "./Pages/Single/Article";
export const productContext = React.createContext();
export const cartContext = React.createContext();
export const addCartContext = React.createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addCart = () => {
    console.log("radi");
  };
  // useEffect(() => {
  //   setProducts(db);
  //   return () => {};
  // }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
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
        />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/products"
          element={
            <productContext.Provider value={products}>
              <Products />
            </productContext.Provider>
          }
        />

        <Route
          path="/products/:id"
          element={
            <productContext.Provider value={products}>
              <addCartContext.Provider value={addCart}>
                <Article />
              </addCartContext.Provider>
            </productContext.Provider>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
