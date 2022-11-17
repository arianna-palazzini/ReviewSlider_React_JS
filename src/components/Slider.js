import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "../data";

const Slider = () => {
  const [feedback] = useState(data);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNextFeedback();
    }, 5000);
    return () => clearTimeout(timer);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const goToPrevFeedback = () => {
    setActive((prevValue) => {
      if (prevValue - 1 < 0) {
        return feedback.length - 1;
      } else {
        return prevValue - 1;
      }
    });
  };

  const goToNextFeedback = () => {
    setActive((prevValue) => {
      if (prevValue + 1 === feedback.length) {
        return 0;
      } else {
        return prevValue + 1;
      }
    });
  };

  return (
    <div className="container slider">
      {feedback.map((fdb, index) => {
        //Cambio classe in base alla posizione dell'elemento rispetto a quello attivo
        let positionClass = "";
        if (index === active) {
          positionClass = "active";
        } else if (
          active === index + 1 ||
          (active === 0 && index === feedback.length - 1)
        ) {
          positionClass = "prev";
        } else {
          positionClass = "next";
        }
        return <Slide key={fdb.id} {...fdb} classes={positionClass} />;
      })}
      <div className="btn-group slider-btn-group">
        <button
          className="btn btn-slider prev-slide"
          onClick={goToPrevFeedback}
        >
          prev
        </button>
        <button
          className="btn btn-slider next-slide"
          onClick={goToNextFeedback}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Slider;
