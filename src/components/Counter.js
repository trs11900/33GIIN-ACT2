import React, { useEffect, useState } from 'react';

function Counter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const storedVisits = localStorage.getItem('visits');
    const newVisits = storedVisits ? parseInt(storedVisits) + 1 : 1;
    localStorage.setItem('visits', newVisits);
    setVisits(newVisits);
  }, []);

  return (
    <div style={{ margin: '20px 0' }}>
      <strong>Contador de visitas:</strong> {visits}
    </div>
  );
}

export default Counter;
