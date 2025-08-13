import "swiper/css";
import "./styles/CoreServices.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { CORE_SERVICES as coreServices } from "../helpers/details";
import { CORE_DETAILS as coreDetails } from "../helpers/details";
import { ReactComponent as ArrowLeft } from "../assets/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../assets/svg/arrow-right.svg";
import { useRef } from "react";

export default function CoreServices() {
  const swiperRef = useRef(null);

  const coreServiceItems = coreServices.map((item, index) => {
    return (
      <SwiperSlide key={index} className="core__slide">
        <div className="core__slide-image">
          <img src={item.img} alt="Core-Service__image" />
        </div>

        <div className="core__slide-content">
          <p>{item.header}</p>

          <p>{item.details}</p>
        </div>
      </SwiperSlide>
    );
  });

  const coreDetailsItems = coreDetails.map((item, index) => {
    return (
      <div className="core__details-item" key={index}>
        <div className="time">{item.time}</div>

        <div className="details">
          <p>{item.header}</p>
          <p>{item.details}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="core-services">
      <div className="core-header">
        <h3>Core Services</h3>

        <div className="scroll__buttons">
          <div
            onClick={() => swiperRef.current.slidePrev()}
            className="btn-core"
          >
            <ArrowLeft />
          </div>

          <div
            onClick={() => swiperRef.current.slideNext()}
            className="btn-core"
          >
            <ArrowRight />
          </div>
        </div>
      </div>

      <Swiper
        className="core__slider"
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 2.5,
          },
          990: {
            slidesPerView: 2.5,
          },
        }}
        spaceBetween={24}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {coreServiceItems}
      </Swiper>

      <div className="core-details">{coreDetailsItems}</div>
    </section>
  );
}
