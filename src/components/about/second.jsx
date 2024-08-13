import React from 'react';
import useCountUp from './count';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';


const Second = () => {

    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    const startCounting = inView;
  
    const projectsCount = useCountUp(0, 10, 1000, startCounting);
    const yearsCount = useCountUp(0, 1, 1000, startCounting);
    const recognitionsCount = useCountUp(0, 18, 1000, startCounting);
    const unhappyClientsCount = useCountUp(0, 0, 1000, startCounting);



  return (
    <div className='about'>
      <div className="name">
        <h1>ABOUT <span>ME</span></h1>
      </div>
      <div class="image-container">
       <div class="img"></div> 
      </div>
      <div className='des'>
        <div className='hello'>
        <h5>
        I am a passionate web designer and developer with 1 year of experience.<br></br> I specialize in creating engaging and user-friendly websites to enhance online<br></br> presence.Dedicated to combining creativity with functionality, I am eager to <br></br>contribute to innovative projects and help businesses thrive online.
        </h5>
      </div>
      </div>
      <div className="experience">
      <div className="project real">
        <h1 ref={ref} className={inView ? 'fade-in' : ''}>
          {projectsCount}<span>+</span>
        </h1>
        <h3>PROJECT DONE</h3>
      </div>
      <div className="eighteen real">
        <h1 className={inView ? 'fade-in' : ''}>{recognitionsCount}</h1>
        <h3>RECOGNITIONS</h3>
      </div>
      <div className="years real">
        <h1 className={inView ? 'fade-in' : ''}>
          {yearsCount}<span>+</span>
        </h1>
        <h3>YEARS OF EXPERIENCE</h3>
      </div>
      <div className="unhappy real">
        <h1 className={inView ? 'fade-in' : ''}>{unhappyClientsCount}</h1>
        <h3>UNHAPPY CLIENTS</h3>
      </div>
    </div>
    <div className='service'>
      <div className="four">
        <h1>SERVICES | <span>OFFER</span></h1>
      </div>
      <div className="branding">
        <div className="web r">
          <h2>Branding</h2>
          <h2>Web Design</h2>
        </div>
        <div className="line">
          <hr></hr>
        </div>
        <div className="strategy r">
          <h2>Strategy</h2>
          <h2>Product Design</h2>
        </div>
        <div className="line">
          <hr></hr>
        </div>
        <div className="direction r">
          <h2>Art Direction</h2>
          <h2>Web Development</h2>
        </div>
        <div className="line">
          <hr></hr>
        </div>
      </div>
    </div>
    <div className='get'>
      <h3>GOT A PROJECT IN MIND?</h3>
      <h1>LET'S <span>CONNECT</span></h1>
      <h3>[ <Link to="contact">GET IN TOUCH</Link> ]</h3>
    </div>

    </div>
  )
}

export default Second;