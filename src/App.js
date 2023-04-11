import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import {
  StyledButton,
  FancyButton,
  SubmitButton,
  AnimatedLogo,
  DarkButton,
  LightButton,
} from "./Components/button/Button";
import logo from "./images/logo.png";
import { useState } from "react";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: 'Roboto'
};

const GlobalStyled = createGlobalStyle`
  button {
    font-family: ${(props)=>props.theme.fontFamily};
  }
`;

function App() {
  const [themeVal, setThemeVal] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <div className="App">
        <AnimatedLogo src={logo} />
        <div>
          <br />
        </div>
        <StyledButton>Button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant="outlined">Button</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton as="div">Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit Button</SubmitButton>
        <div>
          <br />
        </div>
        {themeVal ? (
          <LightButton>Light Button</LightButton>
        ) : (
          <DarkButton>Dark Button</DarkButton>
        )}

        <div>
          <br />
        </div>
        <button onClick={() => setThemeVal(!themeVal)}>
          {themeVal ? "Dark" : "Light"}
        </button>
      </div>
    </ThemeProvider>
  );
}

export default App;
