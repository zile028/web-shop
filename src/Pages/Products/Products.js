import React, { useContext } from "react";
import { productContext } from "../../App";
import PageHeader from "../../Components/Header/PageHeader";
import Article from "./Article";

const Products = () => {
  const content = {
    title: "Products",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vero!",
  };
  const article = useContext(productContext);
  const allArticle = article.map((el) => {
    return <Article product={el} key={el.id} />;
  });

  return (
    <>
      <PageHeader content={content} />
      <section className="featured container py">
        <article>{allArticle}</article>
      </section>
    </>
  );
};

export default Products;
