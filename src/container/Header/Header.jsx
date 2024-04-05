import React from 'react';
import {images} from "../../constants"
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section __padding' id="home">
    <div className='app__wrapper_info'>
<SubHeading title="chase the new flavor"/>
<h1 className='app__header-h1'>The key fine Dining</h1>
<p className='p__opensans' style={{margin:'2rem 0'}}>psum dolor sit, amet consectetur adipisicing elit.<br/> Praesentium, architecto quas asperiores quidem omnis <br/>Praesentium, architecto quas asperiores quidem omnis </p>
<button type="button" className='custom__button'>Explore menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
