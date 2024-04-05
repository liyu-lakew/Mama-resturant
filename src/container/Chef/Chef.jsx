import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

// const Chef = () => (
//   <div className='app__bg app__wrapper
//   section__padding'>
//     <div className='app__wrapper_img app__wrapper_img-reverse'>
//        <img  src={images.chef} alt="chef" />
//       </div>
//       <div className='app__wrapper_info'>
//       <SubHeading title="Chef Word" />
//       <h1 className='headtext__cormorant'> What We Belive In</h1>
//       <div className='app__chef-content'>
//         <div className='app__chef-content_quote'>
//            <img src={images.quote} alt="quote" />
//            <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//           </div>
//           <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem ipsam repellat corrupti beatae. <br/>laboriosam quisquam recusandae deleniti nihil!</p>
//       </div>
//       <div className='app__chef-sign'>
//          <p>Kevin Luo</p>
//          <p className='p__opensans'>Chef &Founder</p>
//          <img src={images.sign} alt="sign"/>
//       </div>
//       </div>
//     </div>
 
// );

const Chef = () => (
  <div className='app__bg app__wrapper
  section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
  <div className='app__wrapper_info'>
<SubHeading title="Chef Word" />
<h1 className='headtext__cormorant'>What we Belive In</h1>
<div className='app__chef-content'>
<div className='app__chef-content_quote'>
<img src={images.quote} alt="quote" />
<p className='p__opensans'>Lorem ipsum dolor sit amet consectetur.</p>
</div>
<p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe numquam, sequi perferendis obcaecati, dicta ipsum omnis voluptatum reprehenderit 
</p>
</div>

<div className='app__chef-sign'>
<p>Keven Luo</p>
<p className='p__opensans'>Chef & Founder</p>
<img src={images.sign } alt="sign" />
</div>
  </div>
</div>
)
export default Chef;
