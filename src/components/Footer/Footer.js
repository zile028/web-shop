import React from "react";

const Footer = () => {
  return (
    <footer>
      <article className="container py">
        <div>
          <h2>Top products</h2>
          <ul>
            <li>Phones</li>
            <li>Clothes</li>
            <li>Accessories</li>
            <li>Digital art</li>
          </ul>
        </div>
        <div>
          <h2>Quick links</h2>
          <ul>
            <li>
              <a href="index.php">Home</a>
            </li>
            <li>
              <a href="shop.php">Shop</a>
            </li>
            <li>
              <a href="products.php">Products</a>
            </li>
            <li>
              <a href="contact.php">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            minima, voluptas voluptatibus omnis vel repellat enim! Nesciunt
            nobis non earum at, quia, accusamus et temporibus, cumque facilis
            distinctio.
          </p>
          <form>
            <input type="email" placeholder="Enter email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </article>
      <section className="bottomBar">
        <article className="container">
          <p>&copy;2021. wbeshop</p>
          <div>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
