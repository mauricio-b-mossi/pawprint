import React from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from '../styles/SwiperWOLinks.module.css';


// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function App({ images }) {
  console.log(images);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className={styles.mySwiper}
      >
        {images &&
          images.map((img, index) => (
            <SwiperSlide key={index}>
          
                <Image
                  src={img.url}
                  alt="Art Image"
                  width="900"
                  height="900"
                  key={img._id}
                />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
