import React from "react";
import ReactDOM from "react-dom/client";
import { Index } from ".";
import { DataContext } from "./contexts/data";
import { ThemeContext } from "./contexts/theme";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DataContext>
    <ThemeContext>
      <Index />
    </ThemeContext>
  </DataContext>
);
