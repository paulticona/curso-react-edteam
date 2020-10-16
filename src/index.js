import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'


/*Nota:, si solo utilizariamos java script tendriamos una dos lineas de codigo mas par apoder
inplementar un hola mundo en la pantalla*/
const root =  document.getElementById("root")
//const elemento = React.createElement(componente, propiedades, hijos)
//const elemento = React.createElement("h1", {className: "saludo"}, "hola Mundo")

/*Nota: peero en cambio con JSX solo necesitamos colocar en elemento la etiqueta mas su contenido*/
//ReactDOM.render(elemento, root);
ReactDOM.render(<App />, root);
