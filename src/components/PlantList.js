import React from 'react';

const arboles = [
    { nombre: 'Manzano', siembra: 'Primavera', cosecha: 'Otoño', fruto: 'Manzana', imagen: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { nombre: 'Naranjo', siembra: 'Primavera', cosecha: 'Invierno', fruto: 'Naranja', imagen: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg' },
    { nombre: 'Peral', siembra: 'Primavera', cosecha: 'Verano', fruto: 'Pera', imagen: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/720/405/pears.jpg?ve=1&tl=1' },
    { nombre: 'Cerezo', siembra: 'Primavera', cosecha: 'Verano', fruto: 'Cereza', imagen: 'https://th.bing.com/th/id/OIP.m5oJSi8feaflYZoRw7ckyQHaE6?w=275&h=182&c=7&r=0&o=5&pid=1.7' }
  ];
  
  

  const flores = [
    { nombre: 'Rosa', siembra: 'Primavera', floracion: 'Verano', imagen: 'https://th.bing.com/th/id/OIP.46_n_Nft2OfMG0dXgZzPdAHaE0?w=304&h=198&c=7&r=0&o=5&pid=1.7' },
    { nombre: 'Tulipán', siembra: 'Otoño', floracion: 'Primavera', imagen: 'https://cdn.pixabay.com/photo/2019/04/28/14/34/tulips-4163317_960_720.jpg' },
    { nombre: 'Girasol', siembra: 'Primavera', floracion: 'Verano', imagen: 'https://www.educima.com/img/thumbnails/0/foto-girasol-19561.jpg' },
    { nombre: 'Lirio', siembra: 'Primavera', floracion: 'Verano', imagen: 'https://www.cuidadodeflores.com/Imagenes/cuidados-de-lirios.jpg' }
  ];

function PlantList() {
  return (
    <div>
      <h2 id="arboles">Árboles Frutales</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Siembra</th>
            <th>Cosecha</th>
            <th>Fruto</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {arboles.map((arbol, index) => (
            <tr key={index}>
              <td>{arbol.nombre}</td>
              <td>{arbol.siembra}</td>
              <td>{arbol.cosecha}</td>
              <td>{arbol.fruto}</td>
              <td><img src={arbol.imagen} alt={arbol.nombre} width="100"/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 id="flores">Flores</h2>
      <ul>
        {flores.map((flor, index) => (
          <li key={index}>
            <strong>{flor.nombre}</strong> - Siembra: {flor.siembra}, Floración: {flor.floracion} <br/>
            <img src={flor.imagen} alt={flor.nombre} width="100"/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlantList;
