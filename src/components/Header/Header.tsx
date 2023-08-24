import React from "react";
import { themeActions, useTheme } from "../../ThemeContext";
import { FaMoon } from "react-icons/fa";
import * as C from "./styles";
import { MdOutlineLightMode } from "react-icons/md";
import { sharedStyles } from "../../sharedStyles";

const Header = () => {
  const { state, dispatch } = useTheme();

  const handleThemeChange = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({
      type: themeActions.setTheme,
      payload: newTheme,
    });
  };

  return (
    <C.Header style={sharedStyles(state)}>
      <h1>devFinder</h1>
      <div className="themeSwitch">
        <p>{state.theme === "light" ? "LIGHT" : "DARK"}</p>
        {state.theme === "light" ? (
          <MdOutlineLightMode onClick={handleThemeChange} />
        ) : (
          <FaMoon onClick={handleThemeChange} />
        )}
      </div>
    </C.Header>
  );
};

export default Header;
