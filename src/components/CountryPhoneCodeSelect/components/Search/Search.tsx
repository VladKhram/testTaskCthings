import React from "react";
import style from "./style.module.css";

interface SearchProps {
  handelSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ handelSearch }: SearchProps) => {
  return (
    <div className={style.search}>
      <span className="material-symbols-outlined">search</span>
      <input type="text" onChange={handelSearch} placeholder="Search..." />
    </div>
  );
};

export default Search;
