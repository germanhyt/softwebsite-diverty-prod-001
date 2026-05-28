import { motion, useReducedMotion } from "framer-motion";
import {
  defaultViewport,
  fadeIn,
  slideInLeft,
  slideInRight,
  staggerLanding,
} from "../lib/motion";

type Props = {
  title: string;
  body: string;
  image: { src: string; alt: string };
  titleId: string;
  /** `cover` para fotos; `contain` para badges o ilustraciones. */
  imageFit?: "cover" | "contain";
};

/** Radio grande del prototipo (~60px) en escritorio */
const IMG_RADIUS =
  "rounded-[2rem] sm:rounded-[3.75rem] sm:rounded-tl-[3.75rem] sm:rounded-bl-[3.75rem] sm:rounded-tr-[3.75rem]";
const PANEL_RADIUS =
  "rounded-[2rem] sm:rounded-none sm:rounded-tr-[3.75rem] sm:rounded-br-[3.75rem]";

export default function GreenHighlightSection({
  title,
  body,
  image,
  titleId,
  imageFit = "cover",
}: Props) {
  const reduce = useReducedMotion();
  const imgVariants = reduce ? fadeIn : slideInLeft;
  const panelVariants = reduce ? fadeIn : slideInRight;
  const imageObjectClass =
    imageFit === "contain" ? "object-contain object-center" : "object-cover object-center";

  return (
    <section className="bg-[#FDEFE7] py-14 md:py-20" aria-labelledby={titleId}>
      <div className="container">
        <motion.div
          className="mx-auto flex w-full max-w-[44rem] flex-col gap-5 lg:max-w-[56rem] sm:flex-row sm:items-center sm:gap-5"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerLanding}
        >
          {/* Imagen: redondeada izquierda + arriba-derecha; borde derecho recto */}
          <motion.div
            className={`relative z-20 w-full shrink-0 overflow-hidden shadow-xl sm:w-[46%] lg:w-[44%] ${IMG_RADIUS}`}
            variants={imgVariants}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`aspect-[4/3] w-full ${imageObjectClass}`}
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/*
            Panel verde: altura solo del contenido, centrado verticalmente
            respecto a la imagen (más bajo que la foto). Borde izquierdo recto,
            cápsula a la derecha. Solapa la imagen.
          */}
          <motion.div
            className="z-10 w-full sm:-ml-10 sm:flex-1 sm:self-center lg:-ml-12"
            variants={panelVariants}
          >
            <div
              className={`bg-[#2E8B57] px-8 py-6 text-white shadow-xl sm:px-10 sm:py-6 lg:px-14 lg:py-14 lg:pl-16 lg:pr-20 ${PANEL_RADIUS}`}
            >
              <div>
                <h2
                  id={titleId}
                  className="mb-2 text-xl font-semibold leading-tight sm:text-[1.25rem] lg:text-2xl"
                >
                  {title}
                </h2>
                <p className="text-sm leading-relaxed text-white/95 sm:text-[1rem] lg:text-[1rem]">
                  {body}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
