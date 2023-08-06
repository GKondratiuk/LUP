import React from 'react'
import './Logo.css'
import Logolup from './2b9edabcaf782ba42849a1aeaac7d4e2.png'

export const Logo = () => {
  return (
    <main className='logo1'>

<div className='lup'>
<img src= {Logolup} alt="" />
</div>

<div className='icons'>
<a href="https://www.youtube.com/@LUPProductora"><i className="bi bi-youtube"></i></a>
<a href="https://twitch.com/"><i className="bi bi-twitch"></i></a>
<a href="https://instagram.com/"><i className="bi bi-instagram"></i></a>
</div>


    </main>
  )
}

export default Logo