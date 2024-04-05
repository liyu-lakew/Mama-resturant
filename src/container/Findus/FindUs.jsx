import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from "../../constants"
const FindUs = () => (
  <div className='app__bg app__wrapper section__pading' id="contact">
    <div className='app__wrapper_info'>
      <SubHeading title="contact"/>
   <h1 className='headtext__cormorant' style={{marginBottom:"3rem"}}>Find Us</h1>
   <div>
   <p className='p__opensans'>Lane Ends Bung</p>
   <p className='p__cormorant' style={{color:'#DCCA87',margin:'2rem 0'}}></p>
   <p className='p__opensans'>Mon - Fri: 10:00am - 02:00 am</p>
   <p className='p__opensans'>Sat -  Sun:10:00am - 03:00 am</p>
    </div>
    <button className='custom__button'style={{marginTop:'2rem'}}>Vist Us</button>
   </div>
   
  
   
    <div className='app__wrapper_img'>
     <img src={images.findus} alt="findus"/>
    </div>
  </div>
);

export default FindUs;
