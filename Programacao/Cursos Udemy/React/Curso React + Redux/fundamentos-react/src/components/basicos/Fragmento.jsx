import React from "react";

function Fragmento(props) {
  return (
    // Podemos usar esta expressão para enviar dados sem estar em uma div
    <React.Fragment>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!</p>
    </React.Fragment>
  );
}

export { Fragmento };
