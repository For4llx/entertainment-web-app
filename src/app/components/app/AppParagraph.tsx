"use client";
import { bodyMedium, bodySmall } from "@/app/styles/Mixins";
import { styled } from "styled-components";

interface IAppParagraph {
  small?: boolean;
}

const AppHeading = styled.p<IAppParagraph>`
  ${(props) => (props.small ? bodySmall : bodyMedium)}
`;

export default AppHeading;
