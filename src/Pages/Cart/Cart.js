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
  let total = 0;
  const myArticle = myCart.map((el) => {
    total += el.article.price;
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
      <section className="cart container py">
        {myArticle}
        <article className="total">
          <p>
            Total: <span>{String.fromCodePoint(0x00024) + " " + total}</span>
          </p>
        </article>
      </section>
    </>
  );
};

export default Cart;
