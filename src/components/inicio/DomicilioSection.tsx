import { domicilio } from "../../data/familiesHome";

export default function DomicilioSection() {
  return (
    <section className="bg-[#FDEFE7] py-16 md:py-24" aria-labelledby="domicilio-title">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-stretch">
          {/* Image Container */}
          <div className="relative z-10 w-full sm:w-[45%] lg:w-[40%]">
            <img
              src={domicilio.image.src}
              alt={domicilio.image.alt}
              className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-xl sm:aspect-auto sm:h-full lg:rounded-[3.5rem]"
              loading="lazy"
            />
          </div>

          {/* Green Pill Container */}
          <div className="relative my-6 flex w-full flex-col justify-center rounded-[1.5rem] bg-[#2E8B57] px-8 text-white shadow-lg sm:-ml-12  sm:flex-1 sm:rounded-l-none sm:rounded-r-[3.5rem]  sm:pl-20 sm:pr-16 lg:pl-24">
            <h2
              id="domicilio-title"
              className="mb-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl"
            >
              {domicilio.title}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-white/95 lg:text-lg">
              {domicilio.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
