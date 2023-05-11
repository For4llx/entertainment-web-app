"use client";
import AppHeader from "@/components/app/AppHeader";
import AppSearch from "@/components/app/AppSearch";
import { Collections } from "@/components/collections";
import { useFetchMovies } from "@/components/collections/ColelctionHook";
import { SideBar } from "@/components/sidebar";
import { HomeLayout } from "@/layouts/HomeLayout";
import { PageLayout } from "@/layouts/PageLayout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/Global";
import { theme } from "../../styles/Theme";

export default function HomePage() {
  const { movies } = useFetchMovies();
  if (movies) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomeLayout>
          <SideBar />
          <PageLayout>
            <AppHeader>
              <AppSearch />
            </AppHeader>
            <Collections heading="Movies" collections={movies} />
          </PageLayout>
        </HomeLayout>
      </ThemeProvider>
    );
  }
}
