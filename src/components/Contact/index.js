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
            Right now, I am seeking software development internships for summer 2024. For any inquiries or interest feel free to 
            fill out the contact form below or contact me directly at k5madan@uwaterloo.ca.
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
