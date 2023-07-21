import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import CountryPhoneCodeSelect from "../../components/CountryPhoneCodeSelect/CountryPhoneCodeSelect";
import style from "./style.module.css";
import Input from "../../UI/Input/Input";
import { normalaziPhoneNumber } from "./helpers";
import { useQuery } from "react-query";
import { CountryPhoneCodeType, fetchCountries } from "../../api/countriesApi";

const ChangePhoneNumperModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { data: countries } = useQuery("countries", fetchCountries);
  const [currentCountry, setCurrentCountry] = useState<CountryPhoneCodeType>();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handelChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPhoneNumber(normalaziPhoneNumber(value));
  };

  const handelCancel = () => {
    if (countries) {
      setCurrentCountry(countries[0]);
    }
    setPhoneNumber("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onCancel={handelCancel}
      onSubmit={() => setIsOpen(false)}
    >
      <p className={style.title}>Change phone number</p>
      <p className={style.lable}>Provide new phone number</p>
      <div className={style.numberRow}>
        <CountryPhoneCodeSelect
          currentCountry={currentCountry}
          setCurrentCountry={setCurrentCountry}
        />
        <Input
          value={phoneNumber}
          customclass={style.maskedInput}
          placeholder="000-000-000"
          type="tel"
          onChange={handelChangePhone}
        />
      </div>
    </Modal>
  );
};

export default ChangePhoneNumperModal;
