"use client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/Global";
import { theme } from "../styles/Theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main></main>
    </ThemeProvider>
  );
}
