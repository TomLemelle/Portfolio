import { useEffect, useRef } from "react";

export default function useClickOutside(handler, triggerRefs = []) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Vérifier si le clic est à l'intérieur de la modal
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      // Vérifier si le clic provient de l'un des boutons trigger
      const isClickOnTrigger = triggerRefs.some(
        (triggerRef) =>
          triggerRef.current && triggerRef.current.contains(event.target)
      );

      if (!isClickOnTrigger) {
        handler(); // Fermer la modal si ce n'est pas un clic sur un trigger
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler, triggerRefs]);

  return ref;
}
