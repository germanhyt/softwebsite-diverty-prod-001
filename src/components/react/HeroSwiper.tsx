import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

type Slide = { src: string; alt: string };

type Props = {
  slides: readonly Slide[];
};

export default function HeroSwiper({ slides }: Props) {
  return (
    <Swiper
      className="hero-swiper rounded-2xl shadow-card"
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5500, disableOnInteraction: false }}
      loop={slides.length > 1}
      spaceBetween={0}
    >
      {slides.map((s) => (
        <SwiperSlide key={s.src}>
          <img
            src={s.src}
            alt={s.alt}
            width={1200}
            height={800}
            className="aspect-[4/3] w-full object-cover md:aspect-[16/10]"
            loading="lazy"
            decoding="async"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
