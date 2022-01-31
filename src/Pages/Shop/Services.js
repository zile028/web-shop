import React from "react";

const Services = () => {
  return (
    <>
      <section className="services container py">
        <article>
          <i className="fas fa-hand-holding-usd"></i>
          <h2>Money back guarantee</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>
        <article>
          <i className="fas fa-truck"></i>
          <h2>Free delivery</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>
        <article>
          <i className="fas fa-headset"></i>
          <h2>Always support</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>
        <article>
          <i className="fas fa-money-check-alt"></i>
          <h2>Secure payment</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>
      </section>

      <section className="dicount">
        <article className="container">
          <h4>woman collection</h4>
          <h2>50% off</h2>
          <button>discover now</button>
          <p>Limited time offer</p>
        </article>
      </section>
    </>
  );
};

export default Services;
