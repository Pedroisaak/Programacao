import React from "react";

export function FamiliaMembro({ nome, sobrenome }) {
  return (
    <div>
      {nome}
      <strong>{sobrenome}</strong>
    </div>
  );
}
