"use client";
import AppHeader from "@/components/app/AppHeader";
import AppSearch from "@/components/app/AppSearch";
import { Collections } from "@/components/collections";
import {
  useFetchCollections,
  useFetchSearchedCollections,
  useFetchSearchedMovies,
  useFetchSearchedTvSeries,
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
import { FormEvent, MouseEventHandler, useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams?.get("term") || "";
  const { searchedTvSeries } = useFetchSearchedTvSeries({ searchTerm });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      `tv-series/search?term=${encodeURIComponent(e.target[0].value)}`
    );
  };

  if (searchedTvSeries) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomeLayout>
          <SideBar />
          <PageLayout>
            <AppHeader>
              <AppSearch
                placeholder="Sarch for TV series"
                handleSubmit={handleSubmit}
              />
            </AppHeader>
            <Collections
              heading={`Found ${searchedTvSeries.length} results for "${searchTerm}"`}
              collections={searchedTvSeries}
            />
          </PageLayout>
        </HomeLayout>
      </ThemeProvider>
    );
  }
  return <div>Hello world</div>;
}

/*
 */
