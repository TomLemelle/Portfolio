"use client";

import { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";

export default function useContact() {
  const [contactIsOpen, setContactIsOpen] = useState(false);
  const buttonsRefs = [useRef(null), useRef(null), useRef(null)];
  const toggleModal = () => setContactIsOpen((prev) => !prev);
  const modalRef = useClickOutside(() => setContactIsOpen(false), buttonsRefs);

  return {
    contactIsOpen,
    setContactIsOpen,
    buttonsRefs,
    toggleModal,
    modalRef,
  };
}
