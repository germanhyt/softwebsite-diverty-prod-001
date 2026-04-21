type Item = {
  name: string;
  role: string;
  photo: { src: string; alt: string };
  quote: string;
};

type Props = {
  items: readonly Item[];
};

export default function TestimonialsSwiper({ items }: Props) {
  return (
    <div className="testimonials-swiper grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {items.map((t) => (
        <article key={t.name} className="rounded-2xl bg-surface-card p-6 shadow-card sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <img
              src={t.photo.src}
              alt={t.photo.alt}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-bold text-primary">{t.name}</div>
              <div className="text-sm text-primary/75">{t.role}</div>
            </div>
          </div>
          {/* <p className="text-sm leading-relaxed text-primary/90 sm:text-base">“{t.quote}”</p> */}
        </article>
      ))}
    </div>
  );
}
