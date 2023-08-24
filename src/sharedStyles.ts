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
