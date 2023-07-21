import React from "react";
import style from "./style.module.css";
import { classNamesJoin } from "../../helpers/classNamesJoin/classNamesJoin";

interface InputProps {
  value?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  width?: string;
  height?: string;
  customclass?: string;
}

const Input = (props: InputProps) => {
  return (
    <input
      className={classNamesJoin([style.input, props.customclass])}
      {...props}
    />
  );
};

export default Input;
