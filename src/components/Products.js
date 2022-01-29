import React, { useContext } from "react";
import { productContext } from "../App";

const Products = () => {
  const products = useContext(productContext);

  return (
    <div className="container">
      <h1>Web Shop</h1>
      <div className="row">
        {products.map((el) => {
          return (
            <div className="col-3">
              <img className="img-fluid" src={el.image} alt="" />
              <p>{el.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
