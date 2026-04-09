import { createContext, useContext } from "react";

export const ThemeContext = createContext(
  // deafult value
  {
    themeMode: "light",
    lightTheme: () => {},
    darkTheme: () => {},
  }
);

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
