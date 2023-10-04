import React from 'react'

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md fixed-top bg-dark' id='navbarColor'>
 
         <a href="#" className='navbar-brand fs-5 ms-3 nav-link text-white'>

          Start up Page</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#btn" aria-controls="navbar" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list text-white" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
    </button>

    
    <div className='collapse navbar-collapse navbarT' id='btn'>
    <ul className='navbar-nav ms-auto'>
      <li className='nav-item'>
        <a href="#home" className='nav-link mx-3 fs-10'>Home</a>
      </li>
      <li className='nav-item'>
        <a href="#about" className='nav-link mx-3 fs-10'>About</a>
      </li>
      <li className='nav-item'>
        <a href="#services" className='nav-link mx-3 fs-10'>Services</a>
      </li>
      <li>
        <button class='btn-login nav-item mx-3'>Login</button>
      </li>
    </ul>
    </div>
</nav>
  )
}
