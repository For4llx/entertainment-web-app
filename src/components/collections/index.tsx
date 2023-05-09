import { container } from "@/styles/Mixins";
import { styled } from "styled-components";
import AppHeading from "../app/AppHeading";
import { useFetchCollections } from "./ColelctionHook";
import { CollectionList } from "./CollectionList";

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${container}
`;

export const Collections = () => {
  const { collections } = useFetchCollections();
  if (collections) {
    return (
      <CollectionContainer>
        <AppHeading large>Recommend for you</AppHeading>
        <CollectionList collections={collections} />
      </CollectionContainer>
    );
  }
};
