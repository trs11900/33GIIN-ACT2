import React from 'react';
import './App.css';
import Counter from './components/Counter';
import PlantList from './components/PlantList';

function App() {
  return (
    <div>
      <header>
        <h1>🌿 Enciclopedia de Árboles Frutales y Flores</h1>
      </header>

      <nav>
        <a href="#arboles">Árboles Frutales</a> | 
        <a href="#flores">Flores</a> | 
        <a href="https://es.wikipedia.org/wiki/Bot%C3%A1nica" target="_blank" rel="noreferrer">¿Qué es la Botánica?</a>
      </nav>

      <main>
        <section>
          <Counter />
        </section>

        <section>
          <PlantList />
        </section>
      </main>

      <footer style={{textAlign: 'center', marginTop: '30px', color: '#777'}}>
        © 2025 Proyecto Actividad 2
      </footer>
    </div>
  );
}

export default App;
