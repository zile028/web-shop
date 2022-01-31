import React from "react";
import { NavLink } from "react-router-dom";

const Article = ({ product }) => {
  return (
    <div className="wrapper">
      <NavLink to={`/products/${product.id}`}>
        <div className="image">
          <img src={product.image} alt="" />
        </div>
        <div className="text">
          <h3>{product.title}</h3>
          <p>{String.fromCodePoint(0x00024) + " " + product.price}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Article;
