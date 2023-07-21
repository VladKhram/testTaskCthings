import React, { ReactNode } from "react";
import style from "./style.module.css";
import { classNamesJoin } from "../../helpers/classNamesJoin/classNamesJoin";

interface ButtonProps {
  onClick: () => void;
  children?: ReactNode;
  isPrimary?: boolean;
  customClass?: string;
}

const Button = ({
  onClick,
  customClass,
  isPrimary,
  children = "",
}: ButtonProps) => {
  return (
    <button
      className={classNamesJoin([
        style.button,
        isPrimary ? style.primary : style.secondary,
        customClass,
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
