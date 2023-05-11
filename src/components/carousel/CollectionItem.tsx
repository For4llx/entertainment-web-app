import { ICollection } from "@/interfaces/Collection";

import AppCardLarge from "../app/AppCardLarge";

interface ICollectionItem {
  collection: ICollection;
}

export const CollectionItem = ({ collection }: ICollectionItem) => {
  return <AppCardLarge collection={collection} />;
};
