import React from "react";

export function Aleatorio({ min, max }) {
  const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <>
      <h2>Numero Aleatório</h2>
      <p>
        <strong>O valor Minimo : </strong> {min}
      </p>
      <p>
        <strong>O valor Máximo : </strong> {max}
      </p>
      <p>
        <strong>O valor Aleatório : </strong> {aleatorio}
      </p>
    </>
  );
}
