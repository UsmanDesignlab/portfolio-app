import React from 'react'
import { Link } from 'react-router-dom';

const Feet = () => {
  return (
    <div className="feet">
      <div className='list'>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="about">ABOUT</Link></li>
          <li><Link to="contact">CONTACT</Link></li>
        </ul>
      </div>
      <div className='design'>
        <h4>DESIGNED BY <span>MUHAMMAD USMAN</span></h4>
      </div>
      <div className='icons'>
       <a href="https://www.behance.net/UsmanDesignLab" target="_blank" rel="noopener noreferrer">BEHANCE</a>
       <a href="https://www.linkedin.com/in/muhammad-usman-b1b16429a/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
       <a href="https://github.com/UsmanDesignlab" target="_blank" rel="noopener noreferrer">GITHUB</a>
       </div>
    </div>
  )
}

export default Feet;