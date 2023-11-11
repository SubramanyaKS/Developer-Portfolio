import { faFacebookF,faInstagram,faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './contact.css'
import CircleButton from '../CircleButton/CircleButton'

const Contact = () => {
    const handleClick = (url)=>{
        window.open(url, '_blank');
    }
  return (
    <section className='contact' id='contact'>
        <h2 className="text-center heading mb-0" style={{"fontFamily": "cursive",}}> &nbsp; Connect me on.</h2>
        <h5 className='mb-2'>Fell free to connect on these sites.</h5>
        <div className='icon-button-container'>
            <CircleButton icon={faFacebookF} onClick={()=>handleClick('https://google.com')} />
            <CircleButton icon ={faXTwitter} onClick={()=>handleClick('https://google.com')} />
            <CircleButton icon={faInstagram} onClick={()=>handleClick('https://google.com')} />
            <CircleButton icon ={faLinkedinIn} onClick={()=>handleClick('https://google.com')} />
            <CircleButton icon ={faEnvelope} onClick={()=>handleClick('https://google.com')} />
        </div>

    </section>
  )
}

export default Contact