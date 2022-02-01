import React from "react";
import PageHeader from "../../Components/Header/PageHeader";
import Services from "./Services";

const Shop = () => {
  const content = {
    title: "Shop",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vero!",
  };
  return (
    <>
      <PageHeader content={content} />
      <Services />
    </>
  );
};

export default Shop;
