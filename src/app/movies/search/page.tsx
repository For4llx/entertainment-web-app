"use client";
import AppHeader from "@/components/app/AppHeader";
import AppSearch from "@/components/app/AppSearch";
import { Collections } from "@/components/collections";
import {
  useFetchCollections,
  useFetchSearchedCollections,
  useFetchSearchedMovies,
  useFetchTrendings,
  useFetchTvSeries,
} from "@/components/collections/ColelctionHook";
import { SideBar } from "@/components/sidebar";
import { HomeLayout } from "@/layouts/HomeLayout";
import { PageLayout } from "@/layouts/PageLayout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../../styles/Global";
import { theme } from "../../../styles/Theme";
import { useRouter, useSearchParams } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams?.get("term") || "";
  const { searchedMovies } = useFetchSearchedMovies({ searchTerm });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`movies/search?term=${encodeURIComponent(e.target[0].value)}`);
  };

  if (searchedMovies) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomeLayout>
          <SideBar />
          <PageLayout>
            <AppHeader>
              <AppSearch handleSubmit={handleSubmit} />
            </AppHeader>
            <Collections
              heading={`Found ${searchedMovies.length} results for "${searchTerm}"`}
              collections={searchedMovies}
            />
          </PageLayout>
        </HomeLayout>
      </ThemeProvider>
    );
  }
}
