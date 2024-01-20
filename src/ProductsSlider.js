import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardModel from './components/CardModel'

//Importing images
import img1 from './img/apple.jpg';
import img2 from './img/orange.jpg';
import img3 from './img/grape.jpg';

const ProductSlider = () => {
  return (
    <div className='container p-4 justify-content-center bg-dark'>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className='mySwiper'
          breakpoints={{
            0:{
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480:{
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768:{
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1280:{
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <CardModel data={{imgSrc:img1, price:'30 Rupees', title: 'Fresh Apple'}} />
          </SwiperSlide>
          <SwiperSlide>
            <CardModel data={{imgSrc:img2, price:'20 Rupees', title: 'Orange'}} />
          </SwiperSlide>
          <SwiperSlide>
            <CardModel data={{imgSrc:img3, price:'45 Rupees', title: 'Juicy Grapes'}} />
          </SwiperSlide>
          <SwiperSlide>
            <CardModel data={{imgSrc:img1, price:'30 Rupees', title: 'Fresh Apple'}} />
          </SwiperSlide>
          <SwiperSlide>
            <CardModel data={{imgSrc:img2, price:'20 Rupees', title: 'Orange'}} />
          </SwiperSlide>
          <SwiperSlide>
            <CardModel data={{imgSrc:img3, price:'45 Rupees', title: 'Juicy Grapes'}} />
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ProductSlider