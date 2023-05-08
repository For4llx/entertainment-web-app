"use client";
import { Login } from "@/components/login";
import { LoginLayout } from "@/layouts/LoginLayout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/Global";
import { theme } from "../../styles/Theme";
import Image from "next/image";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LoginLayout>
        <Image alt="Logo" height={25.6} width={32} src="/assets/logo.svg" />
        <Login />
      </LoginLayout>
    </ThemeProvider>
  );
}
