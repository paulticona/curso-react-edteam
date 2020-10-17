import React from 'react'



// Usamos Expreciones para cambiar el contenido de las etiquetas
//tambien podemos utilizar expreciones dinamicas con las propiedades de las etiquetas
//La mejor forma para no repetir codigo es pasando un objeto a mi componente 
const persona = {
  "nombre": "Guerra", 
  "Apellido": "darck", 
  "Edad": 30}
const mayorDeEdad = edad => edad > 18
const props = {
  "title": "React desde cero",
  "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
  "price": "50 USD",
  "icon": "https://edteam-media.s3.amazonaws.com/users/thumbnail/71b66581-b0b4-4c29-b29e-023da3dac278.jpg"
}
const Componente2 = () => (
  <>
  <div>
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="https://ux.ed.team/img/curso-portada.png" alt="personaje"/>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {'hola, me llamo '+ persona.nombre } <br/>
        {mayorDeEdad(persona.Edad) ? " mayor" : "menor"}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://ux.ed.team/img/profesor.jpg" alt="icon"/>
            </div>
          </div>
          <span className="small">{`${persona.nombre} ${persona.Apellido}`}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">Probar</a>
      </div>
    </div>
  </article>
  </div>




  <div>
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={props.image} alt={props.title}/>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {props.title}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://ux.ed.team/img/profesor.jpg" alt="icon"/>
            </div>
          </div>
          <span className="small">{`${persona.nombre} ${persona.Apellido}`}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">{props.price}</a>
      </div>
    </div>
  </article>
  </div>
</>
)

export default Componente2