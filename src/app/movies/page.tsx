"use client";
import AppHeader from "@/components/app/AppHeader";
import AppSearch from "@/components/app/AppSearch";
import { Collections } from "@/components/collections";
import {
  useFetchMovies,
  useFetchSearchedMovies,
} from "@/components/collections/ColelctionHook";
import { SideBar } from "@/components/sidebar";
import { HomeLayout } from "@/layouts/HomeLayout";
import { PageLayout } from "@/layouts/PageLayout";
import { useRouter, useSearchParams } from "next/navigation";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/Global";
import { theme } from "../../styles/Theme";

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams?.get("term") || "";
  const { movies } = useFetchMovies();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/movies/search?term=${encodeURIComponent(e.target[0].value)}`);
  };

  if (movies) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomeLayout>
          <SideBar />
          <PageLayout>
            <AppHeader>
              <AppSearch
                placeholder="Search for movies"
                handleSubmit={handleSubmit}
              />
            </AppHeader>
            <Collections heading="Movies" collections={movies} />
          </PageLayout>
        </HomeLayout>
      </ThemeProvider>
    );
  }
}
