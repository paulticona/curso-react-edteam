import React from 'react'

const Componente2 = () => (
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="https://ux.ed.team/img/curso-portada.png" alt="personaje"/>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        GUERRA
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://ux.ed.team/img/profesor.jpg" alt="icon"/>
            </div>
          </div>
          <span className="small">RIDDICK</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">Probar</a>
      </div>
    </div>
  </article>
)

export default Componente2