import { CSSProperties, ReactNode } from "react";
import type { ModalController } from "../custom hooks/useModalController";

type Node = {
  children?: ReactNode;
  closeOnBg?: boolean;
  className?: string;
  defaultPosition?: boolean;
};

type Props = Node & ModalController;

function DynamicModal({
  controller,
  children,
  closeOnBg,
  className,
  defaultPosition,
}: Props) {
  const __modal_outer_background: CSSProperties = {
    position: "fixed",
    left: "0",
    top: "0",

    zIndex: 500,

    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0 ,0 , 0.2)",

    opacity: controller.show ? 1 : 0,
    visibility: controller.show ? "visible" : "hidden",

    display: defaultPosition ? "grid" : "",
    placeItems: defaultPosition ? "center" : "",

    transition: "opacity 0.25s ease, visibility 0.25s ease",
  };

  return (
    <>
      <div
        onClick={
          closeOnBg ? (e) => controller?.closeOnBackground(e) : () => null
        }
        style={{
          ...__modal_outer_background,
        }}
        className={`${className} `}
      >
        {children}
      </div>
    </>
  );
}

export default DynamicModal;
