import React, { createContext, useState } from "react";

export enum THEME {
  dark = "dark",
  light = "light",
}

type DefaultValuesProps = {
  theme: THEME;
  setTheme: React.Dispatch<React.SetStateAction<THEME>>;
};

const defaultValues = {
  theme: THEME.light,
  setTheme: () => {},
};

export const ThemeContext = createContext<DefaultValuesProps>(defaultValues);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: THEME;
};

export const ThemeProvider = ({
  children,
  defaultTheme = THEME.light,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<THEME>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
