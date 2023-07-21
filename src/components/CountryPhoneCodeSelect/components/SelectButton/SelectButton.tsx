import React from "react";
import { CountryPhoneCodeType } from "../../../../api/countriesApi";
import { classNamesJoin } from "../../../../helpers/classNamesJoin/classNamesJoin";
import style from "./style.module.css";

interface SelectButtonProps {
  country: CountryPhoneCodeType | undefined;
  handelClick: () => void;
  isShow: boolean;
}

const SelectButton = ({ country, handelClick, isShow }: SelectButtonProps) => {
  return (
    <div className={style.selectButton} onClick={handelClick}>
      <span
        className={classNamesJoin([`fi fi-${country?.icon}`, style.flag])}
      ></span>
      <span>{country?.code}</span>
      <span
        className={classNamesJoin(["material-symbols-outlined", style.arrow])}
      >
        {isShow ? "expand_less" : "expand_more"}
      </span>
    </div>
  );
};

export default SelectButton;
