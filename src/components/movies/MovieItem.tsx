import { ICollection } from "@/interfaces/Collection";
import { styled } from "styled-components";
import AppCard from "../app/AppCard";
import AppHeading from "../app/AppHeading";
import AppParagraph from "../app/AppParagraph";
import Image from "next/image";
import AppIconCategoryMovie from "../app/AppIconCategoryMovie";
import AppIconCategoryTvSeries from "../app/AppIconCategoryTvSeries";

interface ICollectionItem {
  collection: ICollection;
}

export const CollectionItem = ({ collection }: ICollectionItem) => {
  return (
    <AppCard collection={collection}>
      <AppParagraph small>
        {collection.year}・
        {collection.category === "Movie" ? (
          <AppIconCategoryMovie />
        ) : (
          <AppIconCategoryTvSeries />
        )}{" "}
        {collection.category}・{collection.rating}
      </AppParagraph>
      <AppHeading>{collection.title}</AppHeading>
    </AppCard>
  );
};
