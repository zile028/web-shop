import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../App";
import Product from "./Product";

const SingleProduct = () => {
  const slug = useParams();
  const products = useContext(productContext);

  const single = products.filter((el) => {
    return el.id.toString() === slug.id;
  })[0];

  return (
    <div className="container">
      <h1>Single Product</h1>
      <Product data={single} />
    </div>
  );
};

export default SingleProduct;
