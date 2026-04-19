import { useState } from "react";

type Slide = { src: string; alt: string };

type Props = {
  slides: readonly Slide[];
};

export default function HeroSwiper({ slides }: Props) {
  const [index, setIndex] = useState(0);
  const slide = slides[index] ?? slides[0];

  if (!slide) return null;

  return (
    <div className="hero-swiper">
      <img
        src={slide.src}
        alt={slide.alt}
        width={1200}
        height={800}
        className="max-h-[min(28rem,70vw)] w-full rounded-2xl object-cover shadow-card"
      />
      {slides.length > 1 ? (
        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ver imagen ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={
                i === index
                  ? "h-2.5 w-2.5 rounded-full bg-white"
                  : "h-2.5 w-2.5 rounded-full bg-white/45 transition hover:bg-white/70"
              }
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
