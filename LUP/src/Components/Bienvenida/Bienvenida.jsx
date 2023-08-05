import React from 'react'
import './Bienvenida.css'
import BienvenidaImagen from './BienvenidaImagen.jpg'

export const Bienvenida = () => {
  return (
    <main className='bienvenida'>

        <div className='bienvenidaContainer1'>

            <div className='bienvenidaContainer1Letras'>
                <h1>BIENVENIDXS A LUP</h1>
                <h3>Somos la esencia de la música hecha realidad. En nuestra productora audiovisual, fusionamos pasión y talento para dar vida a tus sueños musicales.
En LUP, creemos en capturar la auténtica magia de tu música y transformarla en una experiencia visual inolvidable. Nuestros videos son la ventana perfecta para que tu creatividad brille con calidad cinematográfica.
Sé parte de la revolución musical y déjanos mostrar al mundo lo que eres capaz de lograr. En LUP, no solo hacemos videos, creamos experiencias que perduran en el corazón de quienes te escuchan.

¡Es hora de marcar la diferencia juntos!</h3>
            </div>
            <div className='bienvenidaContainer1Imagen'>
              <img src= {BienvenidaImagen} alt="" />
            </div>

        </div>



    </main>
  )
}

export default Bienvenida