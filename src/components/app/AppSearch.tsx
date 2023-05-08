"use client";
import { headingLarge } from "@/styles/Mixins";
import { styled } from "styled-components";

const SearchIcon = () => {
  return (
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
        fill="#FFF"
      />
    </svg>
  );
};

const SearchField = styled.input`
  padding-bottom: 1rem;
  background-color: transparent;
  color: ${(props) => props.theme.white};
  caret-color: ${(props) => props.theme.red};
  width: 484px;
  ${headingLarge}

  &:active {
    border-bottom: 1px solid ${(props) => props.theme.greyishBlue};
  }
`;

const AppSearchContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const AppSearch = () => {
  return (
    <AppSearchContainer>
      <SearchIcon />
      <SearchField placeholder="Search for movies or TV series" />
    </AppSearchContainer>
  );
};

export default AppSearch;
