import React, { useEffect, useState } from 'react';
import { faCss3, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import image from './ocean5.png';
import NewPageComponent from './exp';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    // Correctly defining `timeoutId` within the useEffect hook's scope
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='page-container' style={{ height: '100vh', overflow: 'scroll' }}>
      <div className='about-page' style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className='about-text'>
            <div className='header-container'>
              <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />
              </h1>
            </div>
            <div className='paragraph-container'>
              <p className='intro'>
                Welcome to my very own personal website! On this about page you'll be able to find everything from 
                my projects, education, experience, and maybe even a little bit more about me!
              </p>
            </div>
          </div>
      </div>
      {/* New Page Section */}
      <div >
        <NewPageComponent/>
        {/* Additional content and components */}
      </div>
    </div>
  );
};

export default About;
