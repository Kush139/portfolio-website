import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('contact_service', 'template_gvz68br', form.current, 'zadDuZHBV7Uk0UFIs')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }


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
            fill out the contact form below or contact me directly at kushmadan246@gmail.com
          </p>
          <div className='contact-form'>
          <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type="text" name="user_name" placeholder="Name" required />
                    </li>
                    <li className='half'>
                        <input type="email" name="user_email" placeholder="email" required />
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
