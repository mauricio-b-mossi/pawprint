import React from 'react'
import NavBar from '../components/NavBar';
import Swiper from '../components/SwiperComponent';
import CardSwiper from '../components/CardSwiper';

export default function art() {
    return (
      <div className='overflow-x-hidden'>
            <NavBar />
            <Swiper />
            {/* <CardSwiper /> */}
            
      </div>
    );
}
