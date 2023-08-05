import React from 'react'
import './BookPhotos.css'
import BienvenidaImagen2 from './BienvenidaImagen2.jpg'
import BienvenidaImagen3 from './BienvenidaImagen3.jpg'
import BienvenidaImagen4 from './BienvenidaImagen4.jpg'
import BienvenidaImagen5 from './BienvenidaImagen5.jpg'
import BienvenidaImagen6 from './BienvenidaImagen6.jpg'
import BienvenidaImagen7 from './BienvenidaImagen7.jpg'
export const BookPhotos = () => {
  return (
    
<>
<section className='Book'>

  <div className='photo1'>
    <img src={BienvenidaImagen2} alt="" />
  </div>

  <div className='photo2'>
    <img className='img1' src={BienvenidaImagen3} alt="" />
    <img className='img2' src={BienvenidaImagen4} alt="" />
  </div>
</section>

<section className='Book'>

<div className='photo1'>
  <img src={BienvenidaImagen6} alt="" />
</div>

<div className='photo2'>
  <img className='img1' src={BienvenidaImagen5} alt="" />
  <img className='img2' src={BienvenidaImagen7} alt="" />
</div>

</section>


</>




  )
}

export default BookPhotos