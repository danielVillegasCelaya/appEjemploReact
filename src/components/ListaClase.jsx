import React from 'react';
import './componente-lista.css';

class ListaClase extends React.Component{

    constructor(props){
      super(props);


      const listaInicial = [];
      this.state= {
        listaInicial
      }
      this.ref={
        valorTextInput,
        valorPrioritySelect
      }
      this.addElement={
        funcion
      }
      this.concat={
        newLista
      }

      if (this.props.elementos !== undefined) {
        for (let i = 0; i < this.props.elementos.length; i++) {
          listaInicial.push(
            <ComponenteListaClase
              done={this.props.elementos[i].done}
              texto={this.props.elementos[i].texto}
              prioridad={this.props.elementos[i].prioridad}
            />
          );
        }
      }

      const funcion = function addElement() {
        const newLista = listaComponentes.concat(
          <ComponenteListaClase
            texto={valorTextInput.current.value}
            prioridad={valorPrioritySelect.current.value}
          />
        );
        setListaComponentes(newLista);
      };

    }


    render(){
      return (
        <div>
          {this.props.titulo} - {this.props.icono}
          <ul>
            {listaComponentes}
            <li>
              <input
                ref={valorTextInput}
                type="text"
                placeholder="Introduce una tarea"
              />
              <br />
              <select ref={valorPrioritySelect}>
                <option value="alta">Prioridad Alta</option>
                <option value="media">Prioridad Media</option>
                <option value="baja">Prioridad Baja</option>
              </select>
              <button onClick={funcion}>Añadir</button>
            </li>
          </ul>
        </div>
      );
    }

    
    

    }
    export default ListaClase;
