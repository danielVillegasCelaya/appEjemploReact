import React from 'react';
import Header from './Header';
import ListaClase from './components/ListaClase';
import Title from './components/Header';

export function App() {
  const elementos1 = [
    { done: false, texto: 'Hacer la compra', prioridad: 'alta' },
    { done: true, texto: 'Sacar al perro', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: false, texto: 'Tomates' },
    { done: true, texto: 'Queso' },
    { done: false, texto: 'Leche' },
  ];
  const elementos3 = [{ done: false, texto: 'Estudiar React.js' }];

  return (
    <div>
      <Title />
      <br />
      <br />
      <br />
      <ListaClase titulo="Tareas de la casa" icono="♥" elementos={elementos1} />
      <ListaClase
        titulo="Lista de la compra"
        icono="✌"
        elementos={elementos2}
      />
      <ListaClase titulo="ToDos del curso" icono="🙌" elementos={elementos3} />
    </div>
  );
}
