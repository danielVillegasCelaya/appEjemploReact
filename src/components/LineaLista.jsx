import React from 'react';
import './componente-lista.css';

export function LineaLista(props) {
  let claseLista = '';
  if (props.done) {
    claseLista = 'el-checked';
  } else {
    claseLista = 'el-unchecked';
  }

  return (
    <li className={claseLista}>
      <input type="checkbox" />
      {props.titulo}
    </li>
  );
}
