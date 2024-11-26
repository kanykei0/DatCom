import classes from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { ArrowSlider } from "assets/index";
import { useRef, useState } from "react";

export const Slider = ({ sliderList = [], renderSlide, amount = 2.2 }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Swiper
      className={classes.swiper}
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={amount}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      onSlideChange={(swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
    >
      {sliderList?.map((item, key) => (
        <SwiperSlide key={key} className={classes.slide}>
          {renderSlide(item)}
        </SwiperSlide>
      ))}
      <div className={classes.buttons}>
        <button
          ref={prevRef}
          className={`${classes.buttons_left} ${
            isBeginning ? classes.disabled : ""
          }`}
        >
          <ArrowSlider />
        </button>
        <button
          ref={nextRef}
          className={`${classes.buttons_right} ${
            isEnd ? classes.disabled : ""
          }`}
        >
          <ArrowSlider />
        </button>
      </div>
    </Swiper>
  );
};
