import React from "react";

import { Primeiro } from "./components/basicos/Primeiro";
import { ComParametro } from "./components/basicos/ComParametro";
import { Fragmento } from "./components/basicos/Fragmento";
import { Aleatorio } from "./components/basicos/Aleatorio";
import { Card } from "./components/layout/Card";
import { Familia } from "./components/basicos/Familia";
import { FamiliaMembro } from "./components/basicos/FamiliaMembro";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <h1>Fundamentos React 2</h1>

      <div className="Cards">
        <Card titulo="#01 - Primeiro">
          <Primeiro></Primeiro>
        </Card>

        <Card titulo="#02 - Com Paramentro">
          <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3} />
        </Card>

        <Card titulo="#03 - Fragmento">
          <Fragmento></Fragmento>
        </Card>

        <Card titulo="#04 - Desafio Aleatorio" color="#080">
          <Aleatorio min={1} max={1000} />
        </Card>

        <Card titulo="#05 - Componente com Filhos">
          <Familia sobrenome="Isaak">
            <FamiliaMembro nome="Pedro "></FamiliaMembro>
            <FamiliaMembro nome="Ana "></FamiliaMembro>
            <FamiliaMembro nome="Lais "></FamiliaMembro>
          </Familia>
        </Card>
      </div>
    </div>
  );
}
