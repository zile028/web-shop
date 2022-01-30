import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../App";

const SingleProduct = () => {
  const slug = useParams();
  const products = useContext(productContext);
  const data = products.filter((el) => {
    return el.id.toString() === slug.id;
  })[0];

  return (
    <div className="single-products container">
      <h1>{data.title}</h1>
      <div className="card">
        <div className="row no-gutters">
          <div className="card-header bg-transparent col-md-3 p-3">
            <img src={data.image} alt="" />
          </div>
          <div className="card-body col-md-9">
            <p>{data.description}</p>
            <p>{data.category}</p>
            <p>{data.rating.count}</p>
            <p>{data.rating.rate}</p>
            <p>{data.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
