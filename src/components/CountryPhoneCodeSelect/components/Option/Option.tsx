import React from "react";
import { CountryPhoneCodeType } from "../../../../api/countriesApi";
import style from "./style.module.css";

interface OptionProps {
  country: CountryPhoneCodeType;
  handelChange: (country: CountryPhoneCodeType) => void;
}

const Option = ({ country, handelChange }: OptionProps) => {
  return (
    <div className={style.wrapper}>
      <li onClick={() => handelChange(country)}>
        <div>
          <span
            className={[`fi fi-${country.icon}`, style.flag].join(" ")}
          ></span>
          <span>{country.name}</span>
        </div>
        <span className={style.optionCode}>{country.code}</span>
      </li>
    </div>
  );
};

export default Option;
