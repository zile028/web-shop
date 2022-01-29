import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { cartContext } from "../App";
import "../css/Product.css";

const Product = ({ data }) => {
  const cart = useContext(cartContext);
  let cardBtn = (id) => {
    return (
      <NavLink to={"/product/" + id} className="btn btn-sm btn-info">
        DETAILS
      </NavLink>
    );
  };
  if (useParams().id) {
    cardBtn = (id) => {
      return (
        <NavLink to={"/"} className="btn btn-sm btn-info">
          HOME
        </NavLink>
      );
    };
  }

  return (
    <div className="card">
      <img src={data.image} alt="" />
      <div className="card-body">
        <h6>{data.title}</h6>
        <p>{data.category}</p>
        <p>{useParams().id && data.description}</p>
        <p>
          Rating: {data.rating.rate} - Votes: <span>{data.rating.count}</span>
        </p>
      </div>
      <div className="card-footer">
        <p>{data.price}</p>
        {cardBtn(data.id)}
      </div>
    </div>
  );
};

export default Product;
