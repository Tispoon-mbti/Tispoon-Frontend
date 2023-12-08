import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme/theme";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
