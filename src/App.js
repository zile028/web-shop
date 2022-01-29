import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
export const productContext = React.createContext();
export const cartContext = React.createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <productContext.Provider value={products}>
              <Products />
            </productContext.Provider>
          }
        ></Route>

        <Route
          path="/product/:id"
          element={
            <productContext.Provider value={products}>
              <cartContext.Provider value={cart}>
                <SingleProduct />
              </cartContext.Provider>
            </productContext.Provider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
