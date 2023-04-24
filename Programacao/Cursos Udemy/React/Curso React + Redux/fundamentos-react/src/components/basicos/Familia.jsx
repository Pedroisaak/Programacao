import React from "react";

export function Familia({ sobrenome, children }) {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { sobrenome });
      })}
    </div>
  );
}
