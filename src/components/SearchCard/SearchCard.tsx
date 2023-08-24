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
        <button>Search</button>
      </div>
    </C.SearchArea>
  );
};

export default SearchCard;
