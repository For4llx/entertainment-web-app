"use client";
import AppHeader from "@/components/app/AppHeader";
import AppSearch from "@/components/app/AppSearch";
import { Carousel } from "@/components/carousel";
import { Collections } from "@/components/collections";
import {
  useFetchCollections,
  useFetchTrendings,
} from "@/components/collections/ColelctionHook";
import { SideBar } from "@/components/sidebar";
import { HomeLayout } from "@/layouts/HomeLayout";
import { PageLayout } from "@/layouts/PageLayout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/Global";
import { theme } from "../styles/Theme";

export default function HomePage() {
  const { trendings } = useFetchTrendings();
  const { collections } = useFetchCollections();
  if (collections && trendings) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomeLayout>
          <SideBar />
          <PageLayout>
            <AppHeader>
              <AppSearch />
              <Carousel heading="Trending" collections={trendings} />
            </AppHeader>
            <Collections
              heading="Recommended for you"
              collections={collections}
            />
          </PageLayout>
        </HomeLayout>
      </ThemeProvider>
    );
  }
}
