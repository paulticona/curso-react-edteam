
/*caja de importaciones*/
import React from 'react';
import "./styles/styles.scss"
import Componente2 from './Componente2'
import Componente3 from './Componente3'
/*******************************************/

//CREO UNA FUNCION DE ARRAY  para pasar los atributos de los objetos a mi 
//componente3
const cardsPersonajes = [
  {
    "name": "Guerra",
    "image": "/img/guerra.jpg",
    "principal": "/img/fuerza.png",
    "atributo": "Fuerza",
    "kills": 200
  },
  {
    "name": "Muerte",
    "image": "/img/muerte.jpg",
    "principal": "/img/fuerza.png",
    "atributo": "Fuerza",
    "kills": 500
  },
  {
    "name": "Furia",
    "image": "/img/furia.jpg",
    "principal": "/img/agilidad.png",
    "atributo": "Agilidad",
    "kills": 300
  },
  {
    "name": "Lucha",
    "image": "/img/lucha.jpg",
    "principal": "/img/inteligencia.png",
    "atributo": "Inteligencia",
    "kills": 450
  }
]

/*******************************************/
const App = ()  => (
<>
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner" src="https://s.yimg.com/ny/api/res/1.2/bzzlTjOjXE1oiDztUzyl9g--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NjAwO2g9MzAw/https://media.zenfs.com/es/levelup_525/7938bc5369329b58cc6c6aa4f373fc3a"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Darksiders</p>
        <p> I II III y IV</p>
        <a href="https://es.wikipedia.org/wiki/Darksiders" className="button dark-color">Jugar</a>
      </div>
    </div>
  </div>
</div>


<div className="ed-grid m-grid-3">

  <Componente2 />

  {/*Bueno en este componente recorreremos un array de objetos  cardsPersonaje[] */}
  
  {cardsPersonajes.map(personaje => <Componente3 
  name={personaje.name} 
  image={personaje.image} 
  principal={personaje.principal} 
  kills={personaje.kills}
  atributo={personaje.atributo}
  />)}
</div>
</>
)
 

/*Reglas JSX
  1.- Toda etiqueta debe cerrarce ( />)
  2.- Los componentes deben devolver un solo elemnto Padre
  3.- apoyarce de los elementos cuando necesito devolver dos elementos (<></> o fagment)
  4.- classNameName = "" => classNameNameName = "" Tambien for => htmlFor
*/

export default App;
