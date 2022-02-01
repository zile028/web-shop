import React from "react";

const SelectedArticle = ({ article, quantity }) => {
  return (
    <article className="cart-article">
      <div>
        <img src={article.image} alt="" />
      </div>
      <div>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <p>
          Quantity: <span>{quantity}</span>
        </p>
        <p>
          Price: <span>{article.price}</span>
        </p>
      </div>
    </article>
  );
};

export default SelectedArticle;
