import React from 'react';
import {images} from "../../constants"
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section __padding' id="home">
    <div className='app__wrapper_info'>
<SubHeading title="chase the new flavor"/>
<h1 className='app__header-h1'>The key fine Dining</h1>
    </div>
    <div className='app__wrapper_img'></div>
  </div>
);

export default Header;
