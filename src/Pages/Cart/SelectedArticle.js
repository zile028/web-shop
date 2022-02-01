import React from "react";

const SelectedArticle = ({ article, quantity }) => {
  return (
    <article className="cart-article">
      <h2>
        My article {article.title} {quantity}
      </h2>
    </article>
  );
};

export default SelectedArticle;
