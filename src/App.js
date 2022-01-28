import React, { useState } from "react";

function App() {
  const productData = [];
  fetch("https://fakestoreapi.com/products")
    .then((resp) => resp.json())
    .then((data) => [...productData, data]);

  const [products, setProducts] = useState(productData);

  console.log(products);

  return <h1>Web Shop</h1>;
}

export default App;
