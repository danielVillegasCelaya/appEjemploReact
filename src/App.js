import React from 'react';
import './componente-lista.css';
import { Lista } from './components/Lista.jsx';
import { LineaLista } from './components/LineaLista.jsx';

export default function App() {
  const elementos1 = [
    { done: false, texto: 'Elemento (Comp1)' },
    { done: true, texto: 'Elemento (Comp2)' },
  ];

  const elementos2=[
    { done: false, texto: 'Elemento (Comp3)' },
    { done: true, texto: 'Elemento (Comp4)' },
    { done: false, texto: 'Elemento (Comp5)' },
  ];

  const elementos3=[{done:false, texto='Elemento (Comp 6)'}];

  return (
    <div>
      <h1>Primer componente</h1>
      <Lista nombre="Componente 1" icono=";(" elementos={elementos2} />
      <Lista nombre="Componente 2" icono=":)" elementos={elementos3} />
      <Lista nombre="Componente 3" icono=";)" elementos={elementos1} />
    </div>
  );
}
