interface State {
  theme: string;
}

export const sharedStyles = (state: State) => {
  return {
    backgroundColor: state.theme === "light" ? "" : "#1e2c48  ",
    color: state.theme === "light" ? "" : "#FFF",
  };
};

export const themeSwitch = (state: State) => {
  return {
    backgroundColor: state.theme === "light" ? "#f4f9ff" : "#141d2e",
  };
};
