import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form>
                <ul>
                    <li className='half'>
                        <input type="text" name="name" placeholder="Name" required />
                    </li>
                    <li className='half'>
                        <input type="email" name="email" placeholder="email" required />
                    </li>
                    <li>
                        <input placeholder="Subject" type="text" name="subject" required />
                    </li>
                    <li>
                        <textarea 
                            placeholder='Message' name='message' required>
                        </textarea>
                    </li>
                    <li>
                        <input type="submit" className='flat-button' value="Send" />
                    </li>
                </ul>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
