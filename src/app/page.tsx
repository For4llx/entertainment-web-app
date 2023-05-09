"use client";
import AppSearch from "@/components/app/AppSearch";
import { Collections } from "@/components/collections";
import { SideBar } from "@/components/sidebar";
import { HomeLayout } from "@/layouts/HomeLayout";
import { PageLayout } from "@/layouts/PageLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/Global";
import { theme } from "../styles/Theme";

const queryClient = new QueryClient();

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <HomeLayout>
          <SideBar />
          <PageLayout>
            <AppSearch />
            <Collections />
          </PageLayout>
        </HomeLayout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
