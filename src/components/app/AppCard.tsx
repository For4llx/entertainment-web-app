import { styled } from "styled-components";
import Image from "next/image";
import AppHeading from "./AppHeading";

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
          stroke-width="1.5"
        />
      </svg>
    </BookMarkContainer>
  );
};

const Thumbnail = styled(Image)`
  border-radius: 8px;
`;

const CardImage = () => {
  return (
    <picture>
      <source srcSet="./assets/thumbnails/the-great-lands/regular/large.jpg" />
      <source srcSet="./assets/thumbnails/the-great-lands/regular/medium.jpg" />
      <source srcSet="./assets/thumbnails/the-great-lands/regular/small.jpg" />
      <Thumbnail
        width={280}
        height={174}
        src="/assets/thumbnails/the-great-lands/regular/large.jpg"
        alt={""}
      />
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
  height: 100%;
  border-radius: 8px;
  opacity: 0;
`;

const AppCardContainer = styled.article`
  cursor: pointer;
  position: relative;
  width: 280px;
  height: 174px;
  border-radius: 8px;
  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const AppCard = () => {
  return (
    <AppCardContainer>
      <CardImage />
      <BookMarkIcon />
      <Overlay>
        <PlayButton>
          <PlayIcon />
          <AppHeading xsmall>Play</AppHeading>
        </PlayButton>
      </Overlay>
    </AppCardContainer>
  );
};

export default AppCard;
