import { ICollection } from "@/interfaces/Collection";
import { styled } from "styled-components";
import { CollectionItem } from "./MovieItem";

const CollectionListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

interface ICollectionList {
  collections: Array<ICollection>;
}

export const CollectionList = ({ collections }: ICollectionList) => {
  const collectionList = collections.map((collection, index) => (
    <li key={index}>
      <CollectionItem collection={collection} />
    </li>
  ));
  return <CollectionListContainer>{collectionList}</CollectionListContainer>;
};
