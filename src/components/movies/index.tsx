import { container } from "@/styles/Mixins";
import { styled } from "styled-components";
import AppHeading from "../app/AppHeading";
import { CollectionList } from "./MovieList";
import useFetchMovies from "./MovieHook";

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${container}
`;

export const Movies = () => {
  const { movies } = useFetchMovies();
  if (movies) {
    return (
      <CollectionContainer>
        <AppHeading large>Movies</AppHeading>
        <CollectionList collections={movies} />
      </CollectionContainer>
    );
  }
};
