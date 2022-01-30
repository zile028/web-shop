import React from "react";
import { NavLink } from "react-router-dom";
import "./Product.css";

const Product = ({ data }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="card">
        <img src={data.image} alt="" />
        <div className="card-body">
          <h6>{data.title}</h6>
          <p>{data.category}</p>
          <p>
            Rating: {data.rating.rate} - Votes: <span>{data.rating.count}</span>
          </p>
          <p>{data.price}</p>
        </div>
        <div className="card-footer">
          <NavLink to={"/product/" + data.id} className="btn btn-sm btn-info">
            DETAILS
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product;
