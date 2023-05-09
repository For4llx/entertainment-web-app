import { bodyMedium } from "@/styles/Mixins";
import { styled } from "styled-components";

const AppButton = styled.button`
  cursor: pointer;
  padding: 1rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.red};
  border-radius: 8px;
  width: 336px;
  ${bodyMedium}

  &:hover {
    color: ${(props) => props.theme.semiDarkBlue};
    background-color: ${(props) => props.theme.white};
  }
`;

export default AppButton;
