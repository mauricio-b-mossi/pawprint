import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function SwiperComponent({ images }) {
  

    return (
      <div className="canvas ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}

          {images &&
            images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img.asset.url}
                  alt="Art Image"
                  layout="fill"
                  key={img.asset._id}
                />
                {/* <div className=" z-10 text-white max-w-lg">
                  <h1 className="text-8xl">{title}.</h1>
                  <div>
                    <p className="text-4xl">{description}</p>
                  </div>
                </div> */}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    );
}
