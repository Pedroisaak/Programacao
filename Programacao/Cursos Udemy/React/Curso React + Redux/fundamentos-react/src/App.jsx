import React from "react";

import { Primeiro } from "./components/basicos/Primeiro";
import { ComParametro } from "./components/basicos/ComParametro";
import { Fragmento } from "./components/basicos/Fragmento";
import { Aleatorio } from "./components/basicos/Aleatorio";
export function App() {
  return (
    <div id="app">
      <h1>Fundamentos React 2</h1>
      <Aleatorio min={1} max={1000} />
      <Fragmento></Fragmento>
      <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3} />
      <Primeiro></Primeiro>
    </div>
  );
}
