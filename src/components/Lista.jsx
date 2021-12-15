import React from 'react';
import { LineaLista } from './LineaLista';

export function Lista(props) {
  const listaComp = [];
  if (props.elementos !== undefined) {
    for (let i = 0; i < props.elementos.length; i++) {
      listaComp.push(
        <LineaLista
          titulo={props.elementos[i].titulo}
          done={props.elementos[i].done}
        />
      );
    }
  }

  return (
    <div>
      {props.nombre}
      <ul>{listaComp}</ul>
    </div>
  );
}
