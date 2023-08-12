import React from 'react'
import './Formulario.css'



export const Formulario = () => {
    const handleRegisterUser = (evento) =>{
        evento.preventDefault()
        console.log('hola mundo')
    }

  return (
    <main className='formulario'>
       <div className='vamos'>
      <form className='formularioContainer' onSubmit={handleRegisterUser}>
    <label htmlFor="nombre">Nombre:</label>
    <input type='text' name='nombre' id='nombre' />
    <label htmlFor="email">Email:</label>
    <input type="email" name='email' id='email' />
    <label htmlFor="textarea">Comentarios:</label>
    <textarea cols="30" rows="5" name='textarea' id='textarea'></textarea>
    
    <button type='submit'>Enviar</button>
   
        </form>
        </div>
        
    
    </main>
  )
}


export default Formulario