import React from 'react';
import "./styles/styles.scss"
import Componente2 from './Componente2'

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
  <Componente2 />
  <Componente2 />
  <Componente2 />
  <Componente2 />
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
