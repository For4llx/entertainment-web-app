"use client";
import AppHeader from "@/components/app/AppHeader";
import AppSearch from "@/components/app/AppSearch";
import { Collections } from "@/components/collections";
import {
  useFetchCollections,
  useFetchTrendings,
  useFetchTvSeries,
} from "@/components/collections/ColelctionHook";
import { SideBar } from "@/components/sidebar";
import { HomeLayout } from "@/layouts/HomeLayout";
import { PageLayout } from "@/layouts/PageLayout";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/Global";
import { theme } from "../../styles/Theme";

export default function HomePage() {
  const { tvSeries } = useFetchTvSeries();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      `/tv-series/search?term=${encodeURIComponent(e.target[0].value)}`
    );
  };
  if (tvSeries) {
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
            <Collections heading="TV Series" collections={tvSeries} />
          </PageLayout>
        </HomeLayout>
      </ThemeProvider>
    );
  }
}
