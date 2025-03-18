import Image from "next/image";
import TitleContainer from "../TitleContainer/TitleContainer";
import ServiceCard from "./ServiceCard/ServiceCard";
import "./Services.css";
import "./responsive.css";

export default function Services() {
  return (
    <section className="services-container" id="services">
      <div className="services-wrapper">
        <TitleContainer badge="Services" isCentered>
          Les services que je propose
        </TitleContainer>

        <div className="services-cards-container">
          <ServiceCard
            color="#3b9078"
            number="01"
            title="Site custom"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
          />
          <ServiceCard
            color="#853b90"
            number="02"
            title="Webflow"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
          />
          <ServiceCard
            color="#3b4990"
            number="03"
            title="Photographie"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
          />
          <ServiceCard
            color="#3b4990"
            number="04"
            title="Vidéo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
          />
        </div>
      </div>
    </section>
  );
}
