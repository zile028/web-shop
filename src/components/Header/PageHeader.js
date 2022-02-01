import React from "react";

const PageHeader = ({ content }) => {
  return (
    <header className="otherHeader">
      <article>
        <h1>{content.title}</h1>
        <p>{content.text}</p>
      </article>
    </header>
  );
};

export default PageHeader;
