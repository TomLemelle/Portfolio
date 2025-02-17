import TitleContainer from "../TitleContainer/TitleContainer";
import ServiceCard from "./ServiceCard/ServiceCard";
import "./Services.css";

export default function Services() {
  return (
    <section className="services-container" id="services">
      <div className="services-wrapper">
        <TitleContainer badge="Services" isCentered>
          Les services que je mets à disposition
        </TitleContainer>

        <div className="services-cards-container">
          <ServiceCard
            number="01"
            title="Site custom"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
          />
          <ServiceCard
            number="02"
            title="Webflow"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
          />
          <ServiceCard
            number="03"
            title="Photographie"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
          />
          <ServiceCard
            number="04"
            title="Vidéo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
          />
        </div>
      </div>
    </section>
  );
}
