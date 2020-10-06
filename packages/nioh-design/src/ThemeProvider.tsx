import React, { FC } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import Normalize from "./Normalize";
import Theme from "./Theme";

interface ProviderProps {
  theme?: any;
}

const ThemeProvider: FC<ProviderProps> = ({ theme, children }) => {
  return (
    <StyledThemeProvider theme={new Theme(theme)}>
      <Normalize />
      {children}
    </StyledThemeProvider>
  );
};
export default ThemeProvider;
