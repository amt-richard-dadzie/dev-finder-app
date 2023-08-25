interface State {
  theme: string;
}

export const sharedStyles = (state: State) => {
  return {
    backgroundColor: state.theme === "light" ? "" : "#151d2f",
    color: state.theme === "light" ? "" : "#FFF",
    transition: "all ease 0.5s",
  };
};

export const themeSwitch = (state: State) => {
  return {
    width: "100vw",
    height: "100vh",
    backgroundColor: state.theme === "light" ? "#f4f9ff" : "#151d2f",
    color: state.theme === "light" ? "#000" : "#FFF",
    transition: "all ease 0.5",
  };
};
