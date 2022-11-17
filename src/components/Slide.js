import React from "react";
import StarCreator from "../utils/StarCreator";

const Slide = ({ autore, recensione, voto, classes }) => {
  return (
    <article className={`slide ${classes}`}>
      <div className="review">
        <h4>{autore}</h4>
        <p>{recensione}</p>
        <div className="star-container">{StarCreator(voto)}</div>
      </div>
    </article>
  );
};

export default Slide;
