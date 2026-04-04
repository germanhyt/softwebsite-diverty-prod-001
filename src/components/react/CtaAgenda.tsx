import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
  email: string;
  phone: string;
  label: string;
};

export default function CtaAgenda({ email, phone, label }: Props) {
  const open = () => {
    void Swal.fire({
      title: "Agenda tu sesión",
      html: `<p class="text-left text-base leading-relaxed">Escríbenos a <a href="mailto:${email}" class="text-[#0070C0] underline">${email}</a> o llámanos al <strong>${phone}</strong>. Te respondemos a la brevedad con fechas y requisitos del ciclo.</p>`,
      icon: "info",
      confirmButtonColor: "#0070C0",
      confirmButtonText: "Cerrar",
    });
  };

  return (
    <button
      type="button"
      onClick={open}
      className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-cta px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {label}
      <FaArrowRight className="text-xl" aria-hidden />
    </button>
  );
}
