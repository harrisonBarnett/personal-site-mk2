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
import Svelte from '../static/images/tech-images/svelte-logo.png'
import Postgres from '../static/images/tech-images/postgres-logo.png'
import Node from '../static/images/tech-images/node-logo.png'
import Mongo from '../static/images/tech-images/mongo-logo.png'


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
          disableOnInteraction: true
      }}
    >
        <SwiperSlide>
          <img src={CSS} alt="css logo"></img> 
          <p className='tech-title'>css</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Figma} alt="figma logo"></img>
          <p className='tech-title'>figma</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Firebase} alt="firebase logo"></img>
          <p className='tech-title'>firebase</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Flask} alt="flask logo"></img>
          <p className='tech-title'>flask</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Git} alt="git logo"></img>
          <p className='tech-title'>git</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HTML} alt="html logo"></img>
          <p className='tech-title'>html</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Java} alt="java logo"></img>
          <p className='tech-title'>java</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Javascript} alt="javascript logo"></img>
          <p className='tech-title'>javascript</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Jest} alt="jest logo"></img>
          <p className='tech-title'>jest</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Photopea} alt="photopea logo"></img>
          <p className='tech-title'>photopea</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Python} alt="python logo"></img>
          <p className='tech-title'>python</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ReactLogo} alt="react logo"></img>
          <p className='tech-title'>react</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={SQL} alt="sql logo"></img>
          <p className='tech-title'>sql</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Svelte} alt="svelte logo"></img>
          <p className='tech-title'>svelte</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Postgres} alt="postgresql logo"></img>
          <p className='tech-title'>postgresql</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mongo} alt="mongoDB logo"></img>
          <p className='tech-title'>mongoDB</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Node} alt="node logo"></img>
          <p className='tech-title'>node</p>
        </SwiperSlide>
    </Swiper>
    )
}
export default TechSlider