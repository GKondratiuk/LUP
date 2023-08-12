import React from 'react'
import './Bienvenida.css'
import BienvenidaImagen from './BienvenidaImagen.jpg'

export const Bienvenida = () => {
  return (
    
      
    <section className='bienvenida'>
      <div className='palabras'>
      <h2>BIENVENIXS A LUP:</h2>
      <p>Somos la esencia de la música hecha realidad. En nuestra productora audiovisual, fusionamos pasión y talento para dar vida a tus sueños musicales. En LUP, creemos en capturar la auténtica magia de tu música y transformarla en una experiencia visual inolvidable. <br /> <br />
      Nuestros videos son la ventana perfecta para que tu creatividad brille con calidad cinematográfica. Sé parte de la revolución musical y déjanos mostrar al mundo lo que eres capaz de lograr. <br /> <br />
      En LUP, no solo hacemos videos, creamos experiencias que perduran en el corazón de quienes te escuchan. ¡Es hora de marcar la diferencia juntos!</p>
      </div>
      <iframe src="https://www.youtube.com/embed/wzb37vXserE?si=AegUzEpKhxqU43J5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className='palabras'>
      <p>
Proponemos un escenario en donde podrás sumergirte en una experiencia única y cinematográfica; creada exclusivamente para musicxs, bandas y artistas como tú. <br /> <br />

Nuestras sesiones electroacústicas en vivo se graban con un enfoque artístico y una calidad excepcional para que puedas compartir tu talento en diversas plataformas y canales de difusión. Filmadas en una acogedora casa en CABA, cada sesión es meticulosamente producida por nuestro equipo, cuidando cada detalle, desde la ambientación del espacio hasta el estilismo, maquillaje y vestuario.
<br /> <br />
Creemos en la importancia de capturar la auténtica energía y emoción de tus actuaciones, brindándote un escenario íntimo y personal donde puedas brillar. Queremos ayudarte a expandir tu alcance y llevar tu música a nuevas audiencias.
<br /> <br />
En Sesiones Cuarto Ce, creemos en el poder de la música y estamos aquí para darte la oportunidad de mostrar tu arte de una forma verdaderamente única. Lo mejor es que nosotros nos ocupamos de todo para que vos.
</p>
      </div>
    <img src={BienvenidaImagen} alt="" />
    </section>

  )
}

export default Bienvenida