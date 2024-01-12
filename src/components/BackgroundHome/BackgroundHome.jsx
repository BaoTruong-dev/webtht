import React from 'react';
import './BackgroundHome.scss';
import backgroundImg1 from '../../assets/images/banner1.jpg';
import backgroundImg2 from '../../assets/images/banner2.png';
import backgroundImg3 from '../../assets/images/banner3.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore,{ Autoplay } from 'swiper';
import 'swiper/css';

SwiperCore.use([Autoplay]);
export default function BackgroundHome() {

    return (

        <div className='background-home'>

            <Swiper
      slidesPerView={1}
      loop={"true"}
      grabCursor={"true"}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}

    >
      <SwiperSlide><img src={backgroundImg1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={backgroundImg2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={backgroundImg3} alt="" /></SwiperSlide>
    </Swiper>
            
        </div>
    );
}
