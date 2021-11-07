import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Mousewheel, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/navigation/navigation.min.css";

import CSS from '../static/images/tech-images/css-logo.png'
import Figma from '../static/images/tech-images/figma-logo.png'
import Firebase from '../static/images/tech-images/firebase-logo.png'
import Flask from '../static/images/tech-images/flask-logo.png'
import Git from '../static/images/tech-images/git-logo.png'
import HTML from '../static/images/tech-images/html-logo.png'
import Java from '../static/images/tech-images/java-logo.png'
import Javascript from '../static/images/tech-images/js-logo.png'
import Jest from '../static/images/tech-images/jest-logo.png'
import Photopea from '../static/images/tech-images/photopea-logo.png'
import Python from '../static/images/tech-images/python-logo.png'
import ReactLogo from '../static/images/tech-images/react-logo.png'
import SQL from '../static/images/tech-images/sql-logo.png'

SwiperCore.use([ Navigation, Mousewheel, Autoplay ])

const TechSlider = () => {
    return (
      <Swiper
      modules={[ Navigation, Mousewheel, Autoplay ]}
      className='tech-swiper'
      spaceBetween={50}
      slidesPerView={5}
      loop={true}
      loopedSlides={12}
      centeredSlides={true}
      mousewheel
      autoplay={{
          delay: 2500,
          disableOnInteraction: false
      }}
    >
        <SwiperSlide>
          <img src={CSS}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Figma}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Firebase}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Flask}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Git}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HTML}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Java}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Javascript}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Jest}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Photopea}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Python}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ReactLogo}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={SQL}></img>
        </SwiperSlide>
    </Swiper>
    )
}
export default TechSlider