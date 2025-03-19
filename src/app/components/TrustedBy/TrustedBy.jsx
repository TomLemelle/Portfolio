import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./TrustedBy.css";
import { useTranslation } from "@/app/contexts/TranslationProvider";

const logos = [
  "/logos/SafeEat-logo.png",
  "/logos/Citizens-logo.png",
  "/logos/PICTION-logo.png",
  "/logos/ComptoirdeMathilde-logo.png",
  "/logos/ADLCabinet-logo.png",
  "/logos/esprit-zen.webp",
  "/logos/librairie-rollon.png",
];

export default function TrustedBy() {
  const containerRef = useRef(null);
  const [showArrows, setShowArrows] = useState(true);
  const { dictionary, locale } = useTranslation();

  useEffect(() => {
    const checkIfArrowsShouldBeVisible = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const contentWidth = containerRef.current.scrollWidth;
        setShowArrows(contentWidth > containerWidth); // Show arrows only if the content is wider than the container
      }
    };

    // Run the check on mount and resize
    checkIfArrowsShouldBeVisible();
    window.addEventListener("resize", checkIfArrowsShouldBeVisible);

    return () => {
      window.removeEventListener("resize", checkIfArrowsShouldBeVisible);
    };
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="trustedby-container">
      <div className="trustedby-wrapper">
        <h2 className="text-[3.75rem] font-semibold max-w-[712px] text-center">
          {dictionary.home.trustedBy.heading}
        </h2>
        <div className="relative w-full flex items-center justify-center">
          {showArrows && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 p-2 bg-gray-200 shadow-md"
            >
              <FaChevronLeft size={24} />
            </button>
          )}
          <div
            ref={containerRef}
            className="flex overflow-x-hidden scroll-smooth scrollbar-hide space-x-28 w-max px-10"
          >
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt="Logo" className="h-24 mx-4" />
            ))}
          </div>
          {showArrows && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 p-2 bg-gray-200 shadow-md"
            >
              <FaChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
