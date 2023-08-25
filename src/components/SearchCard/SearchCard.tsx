import React from "react";
import * as C from "./styles";
import { HiOutlineSearch } from "react-icons/hi";

interface Props {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchCard = ({ inputValue, setInputValue, handleSubmit }: Props) => {
  return (
    <C.SearchArea>
      <form onSubmit={(e) => handleSubmit(e)}>
        <HiOutlineSearch size="1.7em" />
        <input
          type="text"
          placeholder="Search GitHub username.."
          value={inputValue}
          required
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </C.SearchArea>
  );
};

export default SearchCard;
