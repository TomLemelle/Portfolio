import "./HeaderCarousel.css";
import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function HeaderCarousel({ photos = [] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [containerHeight, setContainerHeight] = useState("auto");

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;

    const updateHeight = () => {
      const selectedIndex = embla.selectedScrollSnap();
      const activeSlide = embla.slideNodes()[selectedIndex];

      if (activeSlide) {
        const img = activeSlide.querySelector("img");
        if (img) {
          setContainerHeight(img.naturalHeight);
        }
      }
    };

    embla.on("select", updateHeight);
    updateHeight(); // Mettre à jour dès le premier rendu

    return () => embla.off("select", updateHeight);
  }, [embla, photos.length]);

  return (
    <div
      className="embla shadow"
      ref={emblaRef}
      style={{ height: containerHeight }}
    >
      <div className="embla__container__project">
        {photos.length > 0 ? (
          photos.map((photo, idx) => (
            <div className="embla__slide__project" key={idx}>
              <Image
                src={`/${photo.photo}`}
                width={photo.width || 1600}
                height={photo.height || 817}
                alt={`Image ${idx + 1} du carrousel`}
                className="project-carousel-image"
              />
            </div>
          ))
        ) : (
          <p className="no-images">Aucune image disponible</p>
        )}
      </div>
      {photos.length > 1 && (
        <>
          <IoIosArrowBack
            size="40"
            className="arrow-back"
            onClick={scrollPrev}
          />
          <IoIosArrowForward
            size="40"
            className="arrow-next"
            onClick={scrollNext}
          />
        </>
      )}
    </div>
  );
}
