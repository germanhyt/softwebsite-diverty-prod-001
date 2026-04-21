import { familyHero } from "../../data/familiesHome";

/** Naranja del mock del hero (distinto al accent-orange de cards). */
const HERO_ORANGE = "#FF8C42";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-6 text-white "
      style={{ backgroundColor: HERO_ORANGE }}
      aria-labelledby="hero-title"
    >
      <div className="4xl:container relative z-10 overflow-hidden mt-20 lg:mt-0 ">

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-8 lg:gap-x-12">
          {/* Foto recorte — sin marco; se integra al fondo naranja */}
          <div className="relative order-2 col-span-2 flex justify-center lg:order-1 lg:justify-start">
            <img
              src={familyHero.image.src}
              alt={familyHero.image.alt}
              className="relative z-[1] w-full h-full object-contain drop-shadow-xl lg:mt-12 translate-y-[5%] "
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Texto */}
          <div className="relative lg:absolute lg:top-[6rem] lg:right-[0rem] xl:top-[8rem] xl:right-[2rem] 2xl:top-[10rem] 2xl:right-[8rem] ">
            <div className="container sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <h1
                id="hero-title"
                className=" relative mb-5 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-4xl xl:text-5xl xl:text-[3.35rem]"
              >
                {familyHero.title}
              </h1>
              <p className="relative text-base font-normal leading-relaxed text-white/95 sm:text-lg">
                {familyHero.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
