"use client";
import AppHeader from "@/components/app/AppHeader";
import AppSearch from "@/components/app/AppSearch";
import { Collections } from "@/components/collections";
import {
  useFetchBookmarkedMovies,
  useFetchBookmarkedTvSeries,
} from "@/components/collections/ColelctionHook";
import { SideBar } from "@/components/sidebar";
import { HomeLayout } from "@/layouts/HomeLayout";
import { PageLayout } from "@/layouts/PageLayout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/Global";
import { theme } from "../../styles/Theme";

export default function HomePage() {
  const { bookmarkedMovies } = useFetchBookmarkedMovies();
  const { bookmarkedTvSeries } = useFetchBookmarkedTvSeries();
  if (bookmarkedMovies && bookmarkedTvSeries) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomeLayout>
          <SideBar />
          <PageLayout>
            <AppHeader>
              <AppSearch />
            </AppHeader>
            <Collections
              heading="Bookmarked Movies"
              collections={bookmarkedMovies}
            />
            <Collections
              heading="Bookmarked TV Series"
              collections={bookmarkedTvSeries}
            />
          </PageLayout>
        </HomeLayout>
      </ThemeProvider>
    );
  }
}
