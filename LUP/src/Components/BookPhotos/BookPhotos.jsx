import React from 'react'
import './BookPhotos.css'
import BienvenidaImagen2 from './BienvenidaImagen2.jpg'
import BienvenidaImagen3 from './BienvenidaImagen3.jpg'
import BienvenidaImagen4 from './BienvenidaImagen4.jpg'
export const BookPhotos = () => {
  return (
    

<main className='Book'>

  <div className='photo1'>
    <img src={BienvenidaImagen2} alt="" />
  </div>

  <div className='photo2'>
    <img className='img1' src={BienvenidaImagen3} alt="" />
    <img className='img2' src={BienvenidaImagen4} alt="" />
  </div>

</main>
  )
}

export default BookPhotos