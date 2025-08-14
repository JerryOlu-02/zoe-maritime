import "swiper/css";
import "./styles/PastEvents.scss";
import PastImg0 from "../assets/images/past-img-0.jpg";
import PastImg1 from "../assets/images/past-img-1.jpg";
import PastImg2 from "../assets/images/past-img-2.jpg";
import PastImg3 from "../assets/images/past-img-3.jpg";
import PastImg4 from "../assets/images/past-img-4.jpg";
import PastImg5 from "../assets/images/past-img-5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function PastEvents() {
  useGSAP(() => {
    let sections = gsap.utils.toArray(".img-slide");

    gsap
      .to(".img-slide", {
        xPercent: -100 * (sections.length - 6),
        repeat: -1,
        duration: 25,
        ease: "linear",
      })
      .totalProgress(0);
  });

  return (
    <section className="past-event">
      <h2>Our Past Events</h2>

      <Swiper
        className="past-event__images"
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 1.8,
          },
          768: {
            slidesPerView: 2.8,
          },
          990: {
            slidesPerView: 3.8,
          },
        }}
        spaceBetween={"16px"}
      >
        <SwiperSlide className="img-slide">
          <img src={PastImg0} alt="Past Event 0" />
        </SwiperSlide>
        <SwiperSlide className="img-slide">
          <img src={PastImg1} alt="Past Event 1" />
        </SwiperSlide>
        <SwiperSlide className="img-slide">
          <img src={PastImg2} alt="Past Event 2" />
        </SwiperSlide>
        <SwiperSlide className="img-slide">
          <img src={PastImg3} alt="Past Event 3" />
        </SwiperSlide>
        <SwiperSlide className="img-slide">
          <img src={PastImg4} alt="Past Event 4" />
        </SwiperSlide>
        <SwiperSlide className="img-slide">
          <img src={PastImg5} alt="Past Event 5" />
        </SwiperSlide>

        <SwiperSlide className="img-slide">
          <img src={PastImg0} alt="Past Event 0" />
        </SwiperSlide>
        <SwiperSlide className="img-slide">
          <img src={PastImg1} alt="Past Event 1" />
        </SwiperSlide>
        <SwiperSlide className="img-slide">
          <img src={PastImg2} alt="Past Event 2" />
        </SwiperSlide>
        <SwiperSlide className="img-slide">
          <img src={PastImg3} alt="Past Event 3" />
        </SwiperSlide>
        <SwiperSlide className="img-slide">
          <img src={PastImg4} alt="Past Event 4" />
        </SwiperSlide>
        <SwiperSlide className="img-slide">
          <img src={PastImg5} alt="Past Event 5" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
