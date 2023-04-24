import React from "react";

export function Aleatorio({ min, max }) {
  const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <>
      <p>O valor Minimo é {min}</p>
      <p>O valor Máximo é {max}</p>
      <p>O valor aleatorio é {aleatorio}</p>
    </>
  );
}
