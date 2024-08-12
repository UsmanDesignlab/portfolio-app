
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
  const [text, setText] = useState('USMAN');

  return (
    <div className='nav'>
      <div className="logo">
        <h1
          onMouseEnter={() => setText('USMAN DESIGN LAB')}
          onMouseLeave={() => setText('USMAN')}
        >
          {text}
        </h1>
      </div>
      <div className='list'>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="about">ABOUT</Link></li>
          <li><Link to="contact">CONTACT</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
