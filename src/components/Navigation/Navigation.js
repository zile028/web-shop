import React from "react";
import { Link, NavLink } from "react-router-dom";
import { cartContext } from "../../App";

const Navigation = ({ cart }) => {
  console.log(cart.length);
  return (
    <>
      <section className="topBar">
        <article>
          <p>Phone: 062 218 454 | Email: info@eshop.com</p>
          <p>Gift cards | Contact</p>
        </article>
      </section>

      <nav>
        <article>
          <Link className="brand" to="/">
            WEB <span>shop</span>
          </Link>
          <ul className="navigation">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>
          <ul className="icons">
            <li>
              <NavLink to="#">
                <i className="fas fa-search"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <i className="fas fa-shopping-cart"></i>
                <span>{cart.length}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <i className="fas fa-user"></i>
              </NavLink>
            </li>
          </ul>
        </article>
      </nav>
    </>
  );
};

export default Navigation;
