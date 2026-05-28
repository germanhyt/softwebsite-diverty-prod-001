import { certification } from "../../data/estrategiaPage";
import GreenHighlightSection from "../GreenHighlightSection";

export default function Certification() {
  return (
    <GreenHighlightSection
      titleId="cert-title"
      title={certification.title}
      body={certification.body}
      image={certification.image}
      imageFit="cover"
    />
  );
}
