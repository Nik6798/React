import React from "react";
import "./card.style.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.framework.image} alt="FrameWork" />
      <h2>{props.framework.name}</h2>
      <a href="https://reactjs.org/">Goto Website</a>
    </div>
  );
};
