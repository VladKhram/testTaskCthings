import React, { useEffect, useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import style from "./style.module.css";
import { useQuery } from "react-query";
import { CountryPhoneCodeType, fetchCountries } from "./../../api/countriesApi";
import SelectButton from "./components/SelectButton/SelectButton";
import Option from "./components/Option/Option";
import Search from "./components/Search/Search";

interface CountryPhoneCodeSelectProps {
  currentCountry: CountryPhoneCodeType | undefined;
  setCurrentCountry: (country: CountryPhoneCodeType) => void;
}

const CountryPhoneCodeSelect = ({
  currentCountry,
  setCurrentCountry,
}: CountryPhoneCodeSelectProps) => {
  const [isShow, setIsShow] = useState(false);
  const { data: countries } = useQuery("countries", fetchCountries);
  const [FitCountries, setFitCountries] = useState(countries);

  useEffect(() => {
    if (countries) {
      setCurrentCountry(countries[0]);
      setFitCountries(countries);
    }
  }, [countries, setCurrentCountry]);

  const handelSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLocaleLowerCase();

    setFitCountries(
      countries?.filter((el) => {
        return el.name.toLocaleLowerCase().startsWith(searchValue);
      })
    );
  };

  const onCloseSeacrh = () => {
    setIsShow(false);
  };

  const onChangeCode = (country: CountryPhoneCodeType) => {
    setCurrentCountry(country);
    onCloseSeacrh();
  };

  useEffect(() => {
    window.addEventListener("click", onCloseSeacrh);
    return () => {
      window.removeEventListener("click", onCloseSeacrh);
    };
  }, []);

  return (
    <div
      className={style.wrapper}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <SelectButton
        country={currentCountry}
        handelClick={() => setIsShow(!isShow)}
        isShow={isShow}
      />
      {isShow ? (
        <div className={style.body}>
          <Search handelSearch={handelSearch} />
          <ul className={style.options}>
            {FitCountries?.map((el) => (
              <Option key={el.icon} country={el} handelChange={onChangeCode} />
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default CountryPhoneCodeSelect;
