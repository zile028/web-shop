import React, { useContext } from "react";
import { productContext } from "../App";
import Product from "./Product";
// import "../css/Product.css";

const Products = () => {
  const products = useContext(productContext);

  return (
    <div className="container">
      <h1>Web Shop</h1>
      <div className="row">
        {products.map((el) => {
          return (
            <div className="col-md-3 mb-3" key={el.id}>
              <Product data={el} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
