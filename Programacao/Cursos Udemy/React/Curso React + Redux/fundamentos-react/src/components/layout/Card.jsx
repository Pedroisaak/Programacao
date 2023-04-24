import React from "react";
import "./Card.css";
export function Card({ titulo, children, color }) {
  const cardStyle = {
    backgroundColor: color || "#F00",
    borderColor: color || "#F00",
  };

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{titulo}</div>
      <div className="Content">{children}</div>
    </div>
  );
}
