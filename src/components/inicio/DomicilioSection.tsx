import { domicilio } from "../../data/familiesHome";
import GreenHighlightSection from "../GreenHighlightSection";

export default function DomicilioSection() {
  return (
    <GreenHighlightSection
      titleId="domicilio-title"
      title={domicilio.title}
      body={domicilio.body}
      image={domicilio.image}
      imageFit="cover"
    />
  );
}
