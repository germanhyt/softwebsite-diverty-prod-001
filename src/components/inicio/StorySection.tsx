import { ourStory, brandPillars } from "../../data/familiesHome";

export default function StorySection() {
  return (
    <section className=" " aria-labelledby="story-title">
      <div className="container bg-surface-peach py-16 md:py-24 rounded-[1.75rem]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Historia */}
          <div className="relative">
            <h2
              id="story-title"
              className="mb-6 text-3xl font-bold text-primary sm:text-4xl"
            >
              {ourStory.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-primary/90 lg:max-w-xl">
              {ourStory.body}
            </p>
            <img
              src={ourStory.decorImage.src}
              alt=""
              className="pointer-events-none mt-2 hidden select-none lg:block"
              loading="lazy"
              aria-hidden="true"
            />
          </div>

          {/* Pilares de marca */}
          <div className="flex flex-col gap-4">
            {brandPillars.map((p) => {
              const baseClass =
                "block rounded-[1.35rem] p-6 shadow-card transition sm:p-8";
              const colorClass =
                p.tone === "orange"
                  ? "bg-accent-orange text-white hover:opacity-95"
                  : "bg-primary text-white hover:bg-primary-dark";

              const inner = (
                <>
                  <h3 className="mb-2 text-xl font-bold">{p.name}</h3>
                  <p className="leading-relaxed text-white/95">{p.text}</p>
                </>
              );

              return p.href ? (
                <a
                  key={p.name}
                  href={p.href}
                  className={`${baseClass} ${colorClass}`}
                >
                  {inner}
                </a>
              ) : (
                <div key={p.name} className={`${baseClass} ${colorClass}`}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
