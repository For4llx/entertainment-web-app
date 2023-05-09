import { styled } from "styled-components";
import Image from "next/image";
import { Navigation } from "../navigation";

const SideBarContainer = styled.header`
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  background-color: ${(props) => props.theme.semiDarkBlue};
  border-radius: 20px;
  width: fit-content;
  height: 100%;
  max-height: 960px;
  @media screen and (max-width: 768px) {
    padding: 1.5rem;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    height: fit-content;
  }
  @media screen and (max-width: 375px) {
    border-radius: 0;
  }
`;

const Avatar = styled.img`
  position: absolute;
  bottom: 2rem;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 100%;
  height: 40px;
  width: 40px;
  @media screen and (max-width: 768px) {
    height: 32px;
    width: 32px;
    position: static;
  }
  @media screen and (max-width: 375px) {
    height: 24px;
    width: 24px;
    position: static;
  }
`;

export const SideBar = () => {
  return (
    <SideBarContainer>
      <Image src="/assets/logo.svg" alt="Logo" width={32} height={25.6} />
      <Navigation />
      <Avatar alt="Avatar" src="/assets/image-avatar.png" />
    </SideBarContainer>
  );
};
