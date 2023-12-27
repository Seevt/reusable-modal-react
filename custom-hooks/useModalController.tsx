import { useState, MouseEvent } from "react";

export type ModalController = {
  controller: ReturnType<typeof useModalController>;
};

export const useModalController = () => {
  const [show, setShow] = useState(false);

  function closeOnBackground(e: MouseEvent<HTMLDivElement>): void {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setShow((v) => {
        v = false;
        return v;
      });
    }
  }

  function toggleModal() {
    setShow((v) => !v);
  }

  return { show, toggleModal, closeOnBackground };
};
