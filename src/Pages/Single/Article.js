import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { addCartContext, productContext } from "../../App";

const Article = () => {
  const slug = parseInt(useParams().id);
  const products = useContext(productContext);
  const addCart = useContext(addCartContext);
  const product = products.filter((el) => {
    return el.id === slug;
  })[0];

  const addToCart = () => {
    addCart();
  };

  return (
    <section className="products container py">
      <article>
        <img src={product.image} alt="" />
      </article>
      <article>
        <h2>{product.title}</h2>
        <h3>{String.fromCodePoint(0x00024) + " " + product.price}</h3>
        <h6>
          Category: <span>{product.category}</span>
        </h6>
        <h6>
          Availibility: <span>In Stock</span>
        </h6>
        <hr />
        <p>{product.description}</p>

        <div className="form">
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <select name="quantity">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <button onClick={addToCart}>add to cart</button>
        </div>
      </article>
    </section>
  );
};

export default Article;
