import React from "react";
import "./Card.css";

const Card = ({ timer, clock }) => {
  return (
    <div className="Container">
      <div className="card">
        <div className="bulletL"></div>
        <div className="bulletR"></div>
        <div className="line"></div>
        <div className="text">{timer}</div>
      </div>
      <div className="clock">{clock}</div>
    </div>
  );
};
export default Card;
