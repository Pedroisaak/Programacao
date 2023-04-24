import React from "react";

// interface ComParametroProps {
//   titulo: string;
//   aluno?: string;
//   nota?: number;
// }

function ComParametro({ nota, titulo, aluno }) {
  const status = nota >= 70 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <h2>{titulo}</h2>
      <p>
        <strong> {aluno} </strong>
        tem nota
        <strong> {nota} </strong> e está
        <strong> {status} </strong>
      </p>
    </div>
  );
}

export { ComParametro };
