import React from 'react';

import './componente-lista.css';

class ComponenteListaClase extends React.Component {

  constructor(props){
    super(props);
    this.done=props.done;
    this.prioridad=props.prioridad;
    this.texto=props.texto;
    setElementClass();
  }

  function setElementClass() {
    this.prioridad;
    if (this.done) {
      this.claseLista += ' el-done';
    } else {
      this.claseLista += ' el-undone';
    }
  }

  function setTaskStatus() {
    this.done = !thisthis.done;
    setElementClass();
  }

  return (
    <li className={this.claseLista}>
      <input type="checkbox" onChange={setTaskStatus} />
      {this.texto}
    </li>
  );
}

ComponenteLista.defaultProps = {
  prioridad: 'baja',
};