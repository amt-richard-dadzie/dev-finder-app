import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchCard from "./components/SearchCard/SearchCard";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Header />
      <SearchCard inputValue={inputValue} setInputValue={setInputValue} />
    </>
  );
};

export default App;
