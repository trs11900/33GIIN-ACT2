import React from 'react';
import './App.css';                              // Estilos personalizados
import Counter from './components/Counter';      // Componente que cuenta visitas
import PlantList from './components/PlantList';  // Componente que muestra árboles y flores

function App() {
  return (
    <div>
       {/* Cabecera principal con el título */}
      <header>
        <h1>🌿 Enciclopedia de Árboles Frutales y Flores</h1>
      </header>
       {/* Menú de navegación con enlaces internos y externo */}
      <nav>
        <a href="#arboles">Árboles Frutales</a> | 
        <a href="#flores">Flores</a> | 
        <a href="https://es.wikipedia.org/wiki/Bot%C3%A1nica" target="_blank" rel="noreferrer">¿Qué es la Botánica?</a>
      </nav>
      {/* Contenido principal */}
      <main>
        {/* Contador de visitas */}
        <section>
          <Counter />
        </section>
        {/* Lista de árboles y flores */}
        <section>
          <PlantList />
        </section>
      </main>
       {/* Pie de página con información adicional */}
      <footer style={{textAlign: 'center', marginTop: '30px', color: '#777'}}>
        © 2025 Proyecto Actividad 2
      </footer>
    </div>
  );
}

export default App;
