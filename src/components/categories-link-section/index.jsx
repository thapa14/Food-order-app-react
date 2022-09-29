import React from "react";
import "./style.scss";

// swiper import
import { Swiper, SwiperSlide } from "swiper/react";

// swiper css
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function index({ data }) {
  return (
    <div className="nav-categories w-100 my-3">
      <ul className="d-flex justify-content-between align-items-center">
        <Swiper
          navigation={true}
          spaceBetween={20}
          slidesPerView={8}
          modules={[Navigation]}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <a href={`#${item.tabName}`}>{item.tabName}</a>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  );
}

export default index;
