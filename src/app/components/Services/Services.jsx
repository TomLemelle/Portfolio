import Image from "next/image";
import TitleContainer from "../TitleContainer/TitleContainer";
import ServiceCard from "./ServiceCard/ServiceCard";
import "./Services.css";
import "./responsive.css";
import { useTranslation } from "@/app/contexts/TranslationProvider";

export default function Services() {
  const { dictionary, locale } = useTranslation();

  return (
    <section className="services-container" id="services">
      <div className="services-wrapper">
        <TitleContainer badge={dictionary.home.services.badge} isCentered>
          {dictionary.home.services.heading}
        </TitleContainer>

        <div className="services-cards-container">
          <ServiceCard
            color="#3b9078"
            number="01"
            title={dictionary.home.services.serviceCards.custom.heading}
            description={
              dictionary.home.services.serviceCards.custom.description
            }
          />
          <ServiceCard
            color="#853b90"
            number="02"
            title={dictionary.home.services.serviceCards.webflow.heading}
            description={
              dictionary.home.services.serviceCards.webflow.description
            }
          />
          <ServiceCard
            color="#3b4990"
            number="03"
            title={dictionary.home.services.serviceCards.photography.heading}
            description={
              dictionary.home.services.serviceCards.photography.description
            }
          />
          <ServiceCard
            color="#3b4990"
            number="04"
            title={dictionary.home.services.serviceCards.video.heading}
            description={
              dictionary.home.services.serviceCards.video.description
            }
          />
        </div>
      </div>
    </section>
  );
}
