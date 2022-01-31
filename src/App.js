import db from "./products";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import "./Assets/style/style.scss";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
export const productContext = React.createContext();
export const cartContext = React.createContext();

function App() {
  console.log(db);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setProducts(db);
  //   return () => {};
  // }, []);

  // const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
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
              <Home data={products} />
            </productContext.Provider>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
