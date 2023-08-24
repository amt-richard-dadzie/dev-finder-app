import { createContext, useContext, useReducer } from "react";

interface State {
  theme: string;
}

export const enum themeActions {
  setTheme,
}

interface Provider {
  children: JSX.Element;
}

interface Actions {
  type: themeActions;
  payload: any;
}

interface ThemeType {
  state: State;
  dispatch: (action: Actions) => void;
}

const initialState = {
  theme: "light",
};
//Create the theme context
const ThemeContext = createContext<ThemeType | undefined>(undefined);

//Handles the state updates of the theme context
const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case themeActions.setTheme:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

//The Theme provider that wraps the children components
export const ThemeProvider = ({ children }: Provider) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const themeValue = { state, dispatch };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const contextValue = useContext(ThemeContext);
  if (!contextValue) {
    throw new Error("use useTheme hook inside the ThemeProvider");
  } else {
    return contextValue;
  }
};
