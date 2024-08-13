import React from 'react';
import "./hero.css";
import { Link } from 'react-router-dom';


const One = () => {
  return (
    <>
    <div className='home'>
      <div className='one'>
        <h3>BRANDING &nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;&nbsp;  DEVELOPMENT&nbsp;&nbsp;&nbsp;&nbsp;  ·&nbsp;&nbsp;&nbsp;&nbsp;  UI/UX DESIGN</h3>
      </div>
      <div className="one_head">
        <h1>FRONTENT <span className='two'>DEVELOPER</span></h1>
      </div>
      <div class="image-container">
       <div class="img"></div> 
      </div>
      <div className='hello media'>
        <h5>Hello</h5>
        <h5>I'm Muhammad Usman, a skilled frontend developer and UI/UX designer.<br></br>I specialize in creating engaging and intuitive user interfaces that enhance the<br></br> overall user experience.Passionate about combining aesthetics with<br></br> functionality,I strive to deliver high-quality digital solutions.
        </h5>
      </div>
    </div>
    <div className="flex">
      <div className='present'>
       <h3>(2024 <i class="fa-solid fa-globe"></i> PRESENT)</h3>
       </div>
       <div className='icons'>
       <a href="https://www.behance.net/UsmanDesignLab" target="_blank" rel="noopener noreferrer">BEHANCE</a>
       <a href="https://www.linkedin.com/in/muhammad-usman-b1b16429a/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
       <a href="https://github.com/UsmanDesignlab" target="_blank" rel="noopener noreferrer">GITHUB</a>
       </div>
    </div>

    <div className="two">
        <h1>SELECTED <span>PROJECT</span></h1>
      </div>
      <div className="portfolio">
      <div className="first us">
        <a href="https://www.behance.net/UsmanDesignLab" target="_blank" rel="noopener noreferrer" className="overlay-link"><i class="fa-regular fa-eye"></i>View Project</a>
        </div>
      <div className="second us">
        <a href="https://www.behance.net/UsmanDesignLab" target="_blank" rel="noopener noreferrer" className="overlay-link"><i class="fa-regular fa-eye"></i>View Project</a>
      </div>
      <div className="third us">
        <a href="https://www.behance.net/UsmanDesignLab" target="_blank" rel="noopener noreferrer" className="overlay-link"><i class="fa-regular fa-eye"></i>View Project</a>
      </div>
      <div className="forth us">
        <a href="https://www.behance.net/UsmanDesignLab" target="_blank" rel="noopener noreferrer" className="overlay-link"><i class="fa-regular fa-eye"></i>View Project</a>
      </div>
    </div>
    <div className='get'>
      <h3>GOT A PROJECT IN MIND?</h3>
      <h1>LET'S <span>CONNECT</span></h1>
      <h3>[ <Link to="contact">GET IN TOUCH</Link> ]</h3>
    </div>
   </>
  )
}

export default One;