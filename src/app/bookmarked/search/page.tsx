"use client";
import AppHeader from "@/components/app/AppHeader";
import AppSearch from "@/components/app/AppSearch";
import { Collections } from "@/components/collections";
import {
  useFetchCollections,
  useFetchSearchedBookmarked,
  useFetchSearchedCollections,
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
  const { searchedBookmarked } = useFetchSearchedBookmarked({ searchTerm });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      `/bookmarked/search?term=${encodeURIComponent(e.target[0].value)}`
    );
  };

  if (searchedBookmarked) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomeLayout>
          <SideBar />
          <PageLayout>
            <AppHeader>
              <AppSearch
                placeholder="Search for bookmarked shows"
                handleSubmit={handleSubmit}
                defaultValue={searchTerm}
              />
            </AppHeader>
            <Collections
              heading={`Found ${searchedBookmarked.length} results for "${searchTerm}"`}
              collections={searchedBookmarked}
            />
          </PageLayout>
        </HomeLayout>
      </ThemeProvider>
    );
  }
}
