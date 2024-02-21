import { faCss3, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC } from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from './ScrollToTop';
import { useRef } from "react";


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

  const projects = useRef(null);
  const more = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className='container about-page'>
      <div className='about-text'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', ' ','M', 'e']}
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
      <ScrollToTop />
      <div className="hero">
        <ul>
          <li onClick={() => scrollToSection(projects)} className="link">
            Projects/Skills
          </li>
          <li onClick={() => scrollToSection(more)} className="link">
            More About Me!
          </li>
        </ul>
      </div>
      <div ref={projects} className="projects">
        <h3>Projects/Skills</h3>

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
                <FontAwesomeIcon icon={faC} color='#DD0031'/>
            </div>

        </div>
      </div>
      <div ref={more} className="more">
        <h3>More About Me!</h3>
      </div>
      </div>
    </div>
  );
};

export default About;




