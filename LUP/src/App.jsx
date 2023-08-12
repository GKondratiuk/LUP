import {React} from 'react'
import { Banner, Banner2, Bienvenida, BookPhotos, Footer, Logo, Nabvar, Video, Formulario} from './Components'
import { Route, Routes } from 'react-router-dom'



const App = () => {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Logo/>}/>
      <Route path='conocenos' element={<Bienvenida/>}/>
      <Route path='backstage' element={<BookPhotos/>}/>
      <Route path='contactanos'element={<Formulario/>}/>
    </Routes>
    
    
    </>
  )
}

export default App
