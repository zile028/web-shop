import React, { useContext, useEffect } from "react";
import { productContext } from "../App";
import Featured from "../Components/Featured/Featured";
import Header from "../Components/Header/Header";

const Home = () => {
  const products = useContext(productContext);
  let displayProduct = [];
  let indexArr = null;
  let article = [];

  useEffect(() => {
    console.log("test");
  }, [products]);

  if (products.length > 0) {
    for (let i = 0; i < 3; i++) {
      indexArr = Math.floor(Math.random() * products.length);
      article.push(products[indexArr]);
      products.splice(indexArr, 1);
    }

    displayProduct = article.map((el) => {
      return <Featured product={el} key={el.id} />;
    });
  }

  return (
    <>
      <Header />
      <section className="featured container py">
        <h2>Featured product</h2>
        <hr />
        <article>{displayProduct}</article>
      </section>
      {/* <Featured /> */}
    </>
  );
};

export default Home;
