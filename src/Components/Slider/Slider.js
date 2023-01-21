import React from "react";
// Import Swiper React components
import  {Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation,  EffectFlip } from "swiper";
import { EffectFade } from 'swiper';

const Slider = () => {
  return (
    <div className="container mx-auto  overflow-hidden  z-10 ">
    <Swiper 
     spaceBetween={30}
     centeredSlides={true}
     autoplay={{
         delay: 3000,
         disableOnInteraction: false,
     }}
     pagination={{
         clickable: true,
     }}
     
     navigation={true}
     modules={[Autoplay, Pagination, Navigation,EffectFlip]}
     className="swipe-container mt-4 mb-4 -z-50 rounded-xl cursor-grab "
        effect="flip"

        // navigation={true}
        // modules={[Navigation]}
        // className="mySwiper mt-4 mb-4 overflow-hidden rounded-lg z-10"
    >
        <SwiperSlide className=" ">
       
            
            <img
                className="object-coover w-full h-96 "
                src="https://www.technolife.ir/image/banner_SlideBanner_Sr4n4g_544c3f32-9718-4180-a29a-3a4572626a8d.png"
                alt="image slide 1"
            />
          
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="object-cover w-full h-96"
                src="https://www.technolife.ir/image/banner_SlideBanner_o5k7mf_c39b643d-8a24-488b-896c-53fd6e4554c5.png"
                alt="image slide 2"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="object-fill w-full h-96"
                src="https://www.technolife.ir/image/banner_SlideBanner_YHxUqp_75dfac55-82e2-4c69-877f-2a080bccffe5.png"
                alt="image slide 3"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="object-fill w-full h-96"
                src="https://www.technolife.ir/image/banner_SlideBanner_BIyorb_60c0a564-0eef-4049-943e-fd9ecc3836aa.png"
                alt="image slide 4"
            />
        </SwiperSlide>
    </Swiper>
</div>
  )
}

export default Slider
