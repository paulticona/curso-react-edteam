import React from "react"

const Componente3 = ({name, image, principal, kills, atributo}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={name} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
          {name}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                    <img src={principal} alt="icon"/>
                </div>
          </div>
          <span className="small">{atributo}</span>
        </div>
      </div>
      <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://darksiders.com/">{`Kills: ${kills}`}</a>
      </div>
    </div>
  </article>
)

export default Componente3