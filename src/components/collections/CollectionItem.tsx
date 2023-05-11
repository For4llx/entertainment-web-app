import { ICollection } from "@/interfaces/Collection";
import AppCard from "../app/AppCard";
import AppHeading from "../app/AppHeading";
import AppParagraph from "../app/AppParagraph";
import AppIconCategoryMovie from "../app/AppIconCategoryMovie";
import AppIconCategoryTvSeries from "../app/AppIconCategoryTvSeries";

interface ICollectionItem {
  collection: ICollection;
}

export const CollectionItem = ({ collection }: ICollectionItem) => {
  return <AppCard collection={collection} />;
};
