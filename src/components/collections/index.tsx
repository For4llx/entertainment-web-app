import { ICollection } from "@/interfaces/Collection";
import { container } from "@/styles/Mixins";
import { styled } from "styled-components";
import AppHeading from "../app/AppHeading";
import { CollectionList } from "./CollectionList";

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${container}
`;

interface ICollections {
  heading: string;
  collections: Array<ICollection>;
}

export const Collections = ({ heading, collections }: ICollections) => {
  return (
    <CollectionContainer>
      <AppHeading large>{heading}</AppHeading>
      <CollectionList collections={collections} />
    </CollectionContainer>
  );
};
