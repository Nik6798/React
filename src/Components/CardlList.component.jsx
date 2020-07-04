import React from "react";
import { Card } from "./Card.component";
import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.frameworks.map((framework) => {
        return <Card key={framework.id} framework={framework} />;
      })}
    </div>
  );
};
