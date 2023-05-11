import { ICollection } from "@/interfaces/Collection";
import { styled } from "styled-components";
import { CollectionItem } from "./CollectionItem";

const CollectionListContainer = styled.ul`
  display: flex;
  gap: 2.5rem;
  width: 1240px;
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
