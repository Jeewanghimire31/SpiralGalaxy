import React from "react";
import TestimonialCart from "./TestimonialCard";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// importing
import person from "../data/person";

const Testimonial = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {person.map((data, index) => {
          return (
            <div key={index}>
              <SwiperSlide>
                <TestimonialCart person={data} />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
