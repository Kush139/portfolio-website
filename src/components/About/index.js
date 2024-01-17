import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useRef } from "react";

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Cleanup function to clear the timeout on component unmount or when the dependency changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={5}
          />
        </h1>
        <p>
          
        </p>
        <p align='LEFT'>
         
        </p>
        <p>
         
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faPython} color='#DD0031'/>
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faJsSquare} color='#DD0031'/>
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faHtml5} color='#DD0031'/>
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faReact} color='#DD0031'/>
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faCss3} color='#DD0031'/>
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color='#DD0031'/>
            </div>

        </div>

      </div>
    </div>
  );
};

export default About;
