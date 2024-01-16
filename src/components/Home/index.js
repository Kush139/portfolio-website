import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from "react";



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'K', 'u', 's', 'h', ' ', 'M', 'a', 'd', 'a', 'n', ',']


    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        // Cleanup function to clear the timeout on component unmount
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
   return (

    
       <div className="container home-page">
           <div className="text-zone">
               <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
               <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={5}/>
               <br />
               1st year mathematics student at University of Waterloo
               </h1>
               <h2>Experience with Python, C, Javascript, HTML, SCSS, React</h2>
               <Link to="/contact" className='flat-button'>CONTACT ME</Link>


           </div>
           
       </div>
   )
}


export default Home