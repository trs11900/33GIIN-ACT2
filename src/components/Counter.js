import React, { useEffect, useState } from 'react';
// Componente para contar y mostrar el número de visitas del usuario
function Counter() {
  const [visits, setVisits] = useState(0);
   // useEffect se ejecuta al cargar el componente
  useEffect(() => {
     // Obtener el número de visitas almacenado en localStorage
    const storedVisits = localStorage.getItem('visits');
    // Si existe, incrementarlo; si no, empezar en 1
    const newVisits = storedVisits ? parseInt(storedVisits) + 1 : 1;
    // Guardar el nuevo valor en localStorage
    localStorage.setItem('visits', newVisits);
    // Actualizar el estado del componente
    setVisits(newVisits);
  }, []);

  return (
    <div style={{ margin: '20px 0' }}>
      <strong>Contador de visitas:</strong> {visits}
    </div>
  );
}

export default Counter;
