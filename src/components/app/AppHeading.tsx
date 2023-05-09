import {
  headingLarge,
  headingMedium,
  headingSmall,
  headingXSmall,
} from "@/styles/Mixins";
import { styled } from "styled-components";

interface IAppHeading {
  large?: boolean;
  small?: boolean;
  xsmall?: boolean;
}

const AppHeading = styled.h1<IAppHeading>`
  color: ${(props) => props.theme.white};
  ${(props) =>
    props.large
      ? headingLarge
      : props.small
      ? headingSmall
      : props.xsmall
      ? headingXSmall
      : headingMedium}
`;

export default AppHeading;
