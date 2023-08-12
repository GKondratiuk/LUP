import React from 'react'
import './Formulario.css'



export const Formulario = () => {
    const handleRegisterUser = (evento) =>{
        evento.preventDefault()
        console.log('hola mundo')
    }

  return (
    <main className='formulario'>
       
        <form className='formularioContainer' onSubmit={handleRegisterUser}>
    <label htmlFor="nombre"></label>
    <input type='text' placeholder='Nombre' name='nombre' id='nombre' />
    <label htmlFor="email"></label>
    <input type="email" placeholder='Email' name='email' id='email' />
    <label htmlFor="textarea"></label>
    <textarea cols="30" rows="2" name='textarea' id='textarea'></textarea>
    <button type='submit'>Enviar</button>

        </form>

        

    </main>
  )
}


export default Formulario