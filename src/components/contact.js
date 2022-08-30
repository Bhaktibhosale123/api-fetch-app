import React from 'react';
import fb from './images/fb.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';


const Contact = () => {
  return(
    <div className='container'style={{ backgroundColor: "#97C4B8" }}>
    <h1 className='my-3'>Contact Us</h1>
    <div className='container'>
    <ul style={{listStyleType: "none", display: "flex"}}>
      <li className='mx-3 my-3'><img src={linkedin} alt="linkedin" /><a className='mx-1' href="https://www.linkedin.com/in/bhakti-bhosale-b61008201" target="_blank" rel="noopener noreferrer">  Linkedin</a> </li>
      <li className='mx-3 my-3'><img src={instagram} alt="instagram" /><a className='mx-1' href="https://www.instagram.com/invites/contact/?i=f78hf8exa39d&utm_content=3ocxyqu" target="_blank" rel="noopener noreferrer">  Instagram</a> </li>
      <li className='mx-3 my-3'><img src={fb} alt="fb" /><a className='mx-1' href="https://www.facebook.com/bhakti.bhosale.733" target="_blank" rel="noopener noreferrer">  Facebook</a> </li>
    </ul>
    </div>
    </div>
  )
}
export default Contact
