import { useEffect, useState } from "react";

const useModal = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const openModal = (character) => {
    setSelectedCharacter(character);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedCharacter(null);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "scroll";
    return () => (document.body.style.overflow = "scroll");
  }, [isOpen]);

  return { isOpen, selectedCharacter, openModal, closeModal };
};

export default useModal;
