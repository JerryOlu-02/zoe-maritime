import "swiper/css";
import "./styles/Speakers.scss";
import { SPEAKERS as speakers } from "../helpers/details";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
import useSectionContext from "../helpers/useSectionContext";

export default function Speakers() {
  const speakerRef = useRef(null);

  const { activateSpeakersRef } = useSectionContext();

  useEffect(() => {
    activateSpeakersRef(speakerRef);
  }, []);

  const speakerItem = speakers.map((item, index) => {
    if (index < 8)
      return (
        <div className="speaker-item" key={index}>
          <div className="speaker-item__image">
            <img src={item.image} alt={`${item.name}__image`} />
          </div>

          <div className="speaker-item__desc">
            <h5>{item.name}</h5>

            <p>{item.position}</p>
          </div>
        </div>
      );
  });

  const speakerLastThreeItem = speakers.map((item, index) => {
    if (index >= 8)
      return (
        <div className="speaker-item" key={index}>
          <div className="speaker-item__image">
            <img src={item.image} alt={`${item.name}__image`} />
          </div>

          <div className="speaker-item__desc">
            <h5>{item.name}</h5>

            <p>{item.position}</p>
          </div>
        </div>
      );
  });

  const speakerItemMobile = speakers.map((item, index) => {
    return (
      <SwiperSlide className="speaker-item" key={index}>
        <img
          src={item.image}
          alt={`${item.name}__image`}
          className="speaker-item__image"
        />

        <div className="speaker-item__desc">
          <h5>{item.name}</h5>

          <p>{item.position}</p>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <section ref={speakerRef} className="speakers">
      <aside className="speakers-header">
        <h3>Speakers of the Day</h3>
      </aside>

      <div className="speakers-wrapper-desktop">
        <aside className="speakers-item__wrapper">{speakerItem}</aside>

        <aside className="speakers-last__3__item__wrapper">
          {speakerLastThreeItem}
        </aside>
      </div>

      <Swiper
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
        className="speakers-item__wrapper-mobile"
      >
        {speakerItemMobile}
      </Swiper>
    </section>
  );
}
