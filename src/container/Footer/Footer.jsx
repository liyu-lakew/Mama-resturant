import React from 'react';
import {FooterOverlay,Newsletter} from '../../components'
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'
import './Footer.css';
import {images} from "../../constants"

const Footer = () => (
  <div className='app__footer section__padding'> 
    <FooterOverlay/>
    <Newsletter/>
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9 w 53rd st, Nw 10019,USA</p>
        <p className='p__opensans'>+ 1 213-866-8777</p>
        <p className='p__opensans'>+ 1 213-456-0789</p>
        
      </div>
      <div className='app__footer-links_logo'>
         <img src={images.mama} alt='footer_logo'/>
         <p className='p__opensans'>"The best way yourself in the service of others"</p>
         <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:15}} />
         <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>


         </div>
      </div>
      <div  className="app__footer-links_work">
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>08:00am - 12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'><p className='p__opensans'>07:00am - 11:00 am</p></p>

      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Mama .All Right reserved</p> 
    </div>
  </div>
);

export default Footer;
