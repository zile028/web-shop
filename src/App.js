import React, { useEffect, useState } from "react";
import Products from "./components/Products";
export const productContext = React.createContext();

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
        data.map((el) => {
          console.log(el.image);
        });
      });
  }, []);

  return (
    <>
      <productContext.Provider value={products}>
        <Products />
      </productContext.Provider>
    </>
  );
}

export default App;
