import { styled } from "styled-components";

interface IAppFlex {
  flexDirection?: string;
  gap?: string;
}

const AppFlex = styled.div<IAppFlex>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
`;

export default AppFlex;
