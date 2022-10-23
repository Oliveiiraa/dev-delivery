import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./styles.module.css";
import "swiper/css";
import { Autoplay } from "swiper";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.slide}>
          <img src="/tmp/banner1.png" alt="banner1" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/tmp/banner2.png" alt="banner2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
