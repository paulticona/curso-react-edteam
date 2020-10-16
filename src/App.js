import React from 'react';
import "./styles/styles.scss"

const App = ()  => (
  <>
    <div classNameName="main-banner img-container" id="main-banner">
        <div classNameName="ed-grid lg-grid-6">
          <div classNameName="lg-cols-4 lg-x-2">
            <img classNameName="main-banner__img" alt="banner" src="https://lh3.googleusercontent.com/proxy/xaVnjMWpPVRHFtZmrsDn3CdojK6javSXiEZaGt1oZFn1gyOvBpwGnLxyDTaxqY2Vca-fKlreggSlVTRjJPnA1VmMUeU0M3MgeSSvY-NinUzxRTDID0qww4uR5RW2l7g"/>
            <div classNameName="main-banner__data s-center">
              <p classNameName="t2 s-mb-0">Título del banner</p>
              <p> Subtítulo del banner</p>
              <a href="https://ed.team"  classNameName="button">Botón del banner</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <article className="card">
          <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg" alt=""/>
          </div>
          <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
              Programación orientada a objetos con Go
            </h3>
            <div className="s-mb-2 s-main-center">
              <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                  <div className="circle img-container">
                    <img src="" alt=""/>
                  </div>
                </div>
                <span className="small">Alexys Lozada</span>
              </div>
            </div>
            <div className="s-main-center">
              <a className="button--ghost-alert button--tiny" href="#">$ 20USD</a>
            </div>
          </div>
        </article>
      </div>
 </>
)

/*Reglas JSX
  1.- Toda etiqueta debe cerrarce ( />)
  2.- Los componentes deben devolver un solo elemnto Padre
  3.- apoyarce de los elementos cuando necesito devolver dos elementos (<></> o fagment)
  4.- className = "" => classNameName = "" Tambien for => htmlFor
*/

export default App;
