import { bodyMedium, bodySmall } from "@/styles/Mixins";
import { styled } from "styled-components";

interface IAppParagraph {
  small?: boolean;
}

const AppParagraph = styled.p<IAppParagraph>`
  color: ${(props) => props.theme.white};
  ${(props) => (props.small ? bodySmall : bodyMedium)}
`;

export default AppParagraph;
