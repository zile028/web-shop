import React, { useContext } from "react";
import { cartContext } from "../../App";
import PageHeader from "../../Components/Header/PageHeader";
import SelectedArticle from "./SelectedArticle";
const Cart = () => {
  const content = {
    title: "My Shoping Cart",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vero!",
  };
  const myCart = useContext(cartContext);
  const myArticle = myCart.map((el) => {
    return (
      <SelectedArticle
        article={el.article}
        quantity={el.quantity}
        key={el.id}
      />
    );
  });
  return (
    <>
      <PageHeader content={content} />
      <section className="conatiner py">{myArticle}</section>
    </>
  );
};

export default Cart;
