import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { THEME, ThemeProvider } from "./ThemeProvider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme={THEME.light}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
