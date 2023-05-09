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
`;

const Avatar = styled(Image)`
  position: absolute;
  bottom: 2rem;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 100%;
`;

export const SideBar = () => {
  return (
    <SideBarContainer>
      <Image src="/assets/logo.svg" alt="Logo" width={32} height={25.6} />
      <Navigation />
      <Avatar
        height={40}
        width={40}
        alt="Avatar"
        src="/assets/image-avatar.png"
      />
    </SideBarContainer>
  );
};
