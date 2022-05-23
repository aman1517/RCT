import React from 'react'
import Categories from '../component/Categories';
import Navbar from '../component/Navbar';
import Products from '../component/Products';
import Salebox from '../component/Salebox';

import Footer from '../component/Footer';
import { SliderData } from '../component/ImagesSlider/Sliderdata';
import {ImagesSlider} from '../component/ImagesSlider/ImagesSlider'
import Newsletter from '../component/Newsletter';

const Home = () => {
  return (
    <div>
      <Salebox/>
      <Navbar/>
      {/* <SliderImgs/> */}
    <ImagesSlider slides={SliderData}/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home

