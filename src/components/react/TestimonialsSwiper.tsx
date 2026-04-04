import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

type Item = {
  name: string;
  role: string;
  quote: string;
  photo: { src: string; alt: string };
};

type Props = {
  items: readonly Item[];
};

export default function TestimonialsSwiper({ items }: Props) {
  return (
    <Swiper
      className="testimonials-swiper pb-10"
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {items.map((t) => (
        <SwiperSlide key={t.name} className="h-auto">
          <figure className="flex h-full flex-col rounded-2xl bg-surface-card p-6 shadow-card">
            <img
              src={t.photo.src}
              alt={t.photo.alt}
              width={320}
              height={320}
              className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
              loading="lazy"
            />
            <blockquote className="flex-1 text-center text-sm leading-relaxed text-primary/90">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-center">
              <div className="font-bold text-primary">{t.name}</div>
              <div className="text-sm text-primary/70">{t.role}</div>
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
