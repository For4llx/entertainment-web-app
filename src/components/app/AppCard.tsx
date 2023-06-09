import { styled } from "styled-components";
import Image from "next/image";
import AppHeading from "./AppHeading";
import { ICollection } from "@/interfaces/Collection";
import AppParagraph from "./AppParagraph";
import AppIconCategoryMovie from "./AppIconCategoryMovie";
import AppIconCategoryTvSeries from "./AppIconCategoryTvSeries";

const BookMarkContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(224, 30%, 9%, 50%);
  border-radius: 100%;
  width: 32px;
  height: 32px;
  stroke: ${(props) => props.theme.white};
  fill: none;
  z-index: 1;

  &:hover {
    background-color: ${(props) => props.theme.white};
    stroke: ${(props) => props.theme.darkBlue};
  }

  &:active {
    background-color: hsla(224, 30%, 9%, 50%);
    stroke: ${(props) => props.theme.white};
    fill: ${(props) => props.theme.white};
  }
`;

const BookMarkIcon = () => {
  return (
    <BookMarkContainer>
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          strokeWidth="1.5"
        />
      </svg>
    </BookMarkContainer>
  );
};

const ThumbnailLarge = styled.img`
  border-radius: 8px;
  width: 470px;
  height: 230px;
`;

interface ICardImage {
  collection: ICollection;
}

const Thumbnail = styled.img`
  border-radius: 8px;
  width: 280px;
  height: 174px;
`;

interface ICardImage {
  collection: ICollection;
}

const CardImage = ({ collection }: ICardImage) => {
  return (
    <picture>
      <source srcSet={collection.thumbnail.regular.large} />
      <source srcSet={collection.thumbnail.regular.medium} />
      <source srcSet={collection.thumbnail.regular.small} />
      <Thumbnail src={collection.thumbnail.regular.large} alt={""} />
    </picture>
  );
};

const PlayIcon = () => {
  return (
    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
        fill="#FFF"
      />
    </svg>
  );
};

const PlayButton = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background-color: hsla(100, 100%, 100%, 25%);
  border-radius: 28.5px;
  width: 117px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(0, 0%, 0%, 50%);
  width: 100%;
  height: 174px;
  border-radius: 8px;
  opacity: 0;
`;

const OverlayLarge = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(0, 0%, 0%, 50%);
  width: 100%;
  height: 230px;
  border-radius: 8px;
  opacity: 0;
`;
const AppCardContainer = styled.article`
  cursor: pointer;
  position: relative;
  width: 280px;
  border-radius: 8px;
  &:hover ${Overlay} {
    opacity: 1;
  }
`;

interface IAppCard {
  collection: ICollection;
}

const AppCard = ({ collection }: IAppCard) => {
  return (
    <AppCardContainer>
      <CardImage collection={collection} />
      <BookMarkIcon />
      <Overlay>
        <PlayButton>
          <PlayIcon />
          <AppHeading xsmall>Play</AppHeading>
        </PlayButton>
      </Overlay>
      <AppParagraph small>
        {collection.year}・
        {collection.category === "Movie" ? (
          <AppIconCategoryMovie />
        ) : (
          <AppIconCategoryTvSeries />
        )}{" "}
        {collection.category}・{collection.rating}
      </AppParagraph>
      <AppHeading xsmall>{collection.title}</AppHeading>
    </AppCardContainer>
  );
};

export default AppCard;
