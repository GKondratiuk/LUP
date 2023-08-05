import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <section className='footer'>
<div className='footerContainer'>
        <div className='tituloFooter'>
            <h2>Te ayudamos a llevar tu música al</h2>
        </div>

        <div className='tituloFooterDos'>
            <h2>siguiente nivel!</h2>
        </div>

        <div className='footerParrafo'>
            <p>
            Cada proyecto tiene su propia historia <br />y por eso ofrecemos <br /> una experiencia audiovisual <br /> completa y personalizada.
            </p>
        </div>

        <div className='footerBtn'>
            <button>
                <p>Pedí tu Presupuesto</p>
            </button>
        </div>

        </div>
       
    </section>
  )
}

export default Footer