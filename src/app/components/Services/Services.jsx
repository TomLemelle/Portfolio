import Image from "next/image";
import TitleContainer from "../TitleContainer/TitleContainer";
import ServiceCard from "./ServiceCard/ServiceCard";
import "./Services.css";

export default function Services() {
  return (
    <section className="services-container" id="services">
      <Image
        className="header-services-quadrillage"
        src="/quadrillage.png"
        alt="Photo de Tom Lemelle"
        width={1000} // Valeur arbitraire qui sera réduite avec CSS
        height={1000}
        style={{
          width: "60%",
          height: "auto",
          borderRadius: "30px",
          objectFit: "cover",
          maskImage:
            "radial-gradient(circle, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

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
