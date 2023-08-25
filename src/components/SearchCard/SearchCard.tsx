import React from "react";
import * as C from "./styles";
import { HiOutlineSearch } from "react-icons/hi";

interface Props {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const SearchCard = ({ inputValue, setInputValue }: Props) => {
  return (
    <C.SearchArea>
      <div>
        <HiOutlineSearch />
        <input
          type="text"
          placeholder="Search GitHub username.."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <button>Search</button>
    </C.SearchArea>
  );
};

export default SearchCard;
