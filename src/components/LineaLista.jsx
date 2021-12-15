import React from 'react';

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
