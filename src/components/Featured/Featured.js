import React from "react";

const Featured = ({ product }) => {
  return (
    <div className="wrapper">
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="text">
        <h3>{product.title}</h3>
        <p>{String.fromCodePoint(0x00024) + " " + product.price}</p>
      </div>
    </div>
  );
};

export default Featured;
