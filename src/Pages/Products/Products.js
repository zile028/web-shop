import React, { useContext } from "react";
import { productContext } from "../../App";
import Article from "./Article";

const Products = () => {
  const article = useContext(productContext);
  const allArticle = article.map((el) => {
    return <Article product={el} key={el.id} />;
  });

  return (
    <section className="featured container py">
      <h2>Products</h2>
      <hr />
      <article>{allArticle}</article>
    </section>
  );
};

export default Products;
