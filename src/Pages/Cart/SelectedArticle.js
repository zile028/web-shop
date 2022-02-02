import React from "react";

const SelectedArticle = ({ article, quantity }) => {
  const removeArticle = (id) => {
    console.log("remove" + id);
  };
  return (
    <article className="cart-article">
      <div className="cart-header">
        <img src={article.image} alt="" />
      </div>
      <div className="card-body">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <p className="quantity">
          Quantity: <span>{quantity}</span>
        </p>
        <p className="price">
          Price:{" "}
          <span>{String.fromCodePoint(0x00024) + " " + article.price}</span>
        </p>
      </div>
      <div className="cart-footer">
        <button
          onClick={() => {
            removeArticle(article.id);
          }}
        >
          REMOVE
        </button>
      </div>
    </article>
  );
};

export default SelectedArticle;
