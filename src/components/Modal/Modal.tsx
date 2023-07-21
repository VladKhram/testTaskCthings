import React, { ReactNode } from "react";
import Button from "../../UI/Button/Button";
import { createPortal } from "react-dom";
import style from "./style.module.css";

interface ModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: () => void;
  children?: ReactNode;
}

const Modal = ({ children, onCancel, onSubmit, isOpen }: ModalProps) => {
  if (isOpen) {
    return createPortal(
      <div className={style.overlay}>
        <div className={style.wrapper}>
          {children}
          <div className={style.buttonsWrapper}>
            <Button onClick={() => onCancel()}>Cancel</Button>
            <Button
              onClick={() => {
                onSubmit();
              }}
              isPrimary
              customClass={style.submitButton}
            >
              Save
            </Button>
          </div>
        </div>
      </div>,
      document.getElementById("portal") as HTMLElement
    );
  } else {
    return null;
  }
};

export default Modal;
