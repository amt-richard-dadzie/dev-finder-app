import React from "react";
import * as C from "./styles";
import { HiOutlineSearch } from "react-icons/hi";
import { sharedStyles } from "../../sharedStyles";
import { useTheme } from "../../ThemeContext";

interface Props {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchCard = ({ inputValue, setInputValue, handleSubmit }: Props) => {
  const { state } = useTheme();

  return (
    <C.SearchArea>
      <form onSubmit={(e) => handleSubmit(e)} style={sharedStyles(state)}>
        <HiOutlineSearch size="2.0em" color="blue" />
        <input
          style={sharedStyles(state)}
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
