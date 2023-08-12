import React from 'react'
import './Bienvenida.css'
import BienvenidaImagen from './BienvenidaImagen.jpg'

export const Bienvenida = () => {
  return (
    
      
    <section className='bienvenida'>
      <div className='palabras'>
      <h2>BIENVENIXS A LUP</h2>
      <p>Somos la esencia de la música hecha realidad. En nuestra productora audiovisual, fusionamos pasión y talento para dar vida a tus sueños musicales. En LUP, creemos en capturar la auténtica magia de tu música y transformarla en una experiencia visual inolvidable. Nuestros videos son la ventana perfecta para que tu creatividad brille con calidad cinematográfica. Sé parte de la revolución musical y déjanos mostrar al mundo lo que eres capaz de lograr. En LUP, no solo hacemos videos, creamos experiencias que perduran en el corazón de quienes te escuchan. ¡Es hora de marcar la diferencia juntos!</p>
      </div>
    <img src= {BienvenidaImagen} alt="" />
    
    </section>

  )
}

export default Bienvenida