export type CountryPhoneCodeType = {
  icon: string;
  code: string;
  name: string;
};

const countries: CountryPhoneCodeType[] = [
  {
    icon: "pl",
    name: "Poland",
    code: "+48",
  },
  {
    icon: "af",
    name: "Afghanistan",
    code: "+93",
  },
  {
    icon: "ax",
    name: "Aland Islands",
    code: "+358",
  },
  {
    icon: "al",
    name: "Albania",
    code: "+355",
  },
  {
    icon: "dz",
    name: "Algeria",
    code: "+213",
  },
  {
    icon: "ad",
    name: "Andorra",
    code: "+376",
  },
  {
    icon: "as",
    name: "American Samoa",
    code: "+1",
  },
  {
    icon: "ao",
    name: "Angola",
    code: "+244",
  },
];

export const fetchCountries = () => countries;
