import React, { useContext } from "react";
import { productContext } from "../App";
import Product from "./template/Product";

const Products = () => {
  const products = useContext(productContext);
  const allProducts = products.map((el) => {
    return <Product data={el} key={el.id} />;
  });
  return (
    <div className="container">
      <h1>Web Shop</h1>
      <div className="all-products row">{allProducts}</div>
    </div>
  );
};

export default Products;
