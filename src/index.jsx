// import from modules
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";

// import components
import App from "./App";

// import store
import store from "./store";

// import style
import 'reset.css'
import './index.css';
import GlobalStyle from "./themes/GlobalStyles";

// import theme
import { theme } from "./themes/Themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>
);
