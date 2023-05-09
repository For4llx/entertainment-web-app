"use client";
import { css } from "styled-components";

export const headingLarge = css`
  font-family: "Outfit", sans-serif;
  font-size: 32px;
  font-weight: 300;
  letter-spacing: -0.5px;
`;

export const headingMedium = css`
  font-family: "Outfit", sans-serif;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0px;
`;

export const headingSmall = css`
  font-family: "Outfit", sans-serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0px;
`;

export const headingXSmall = css`
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
`;

export const bodyMedium = css`
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0px;
`;

export const bodySmall = css`
  font-family: "Outfit", sans-serif;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0px;
`;

export const container = css`
  --container: 1240px;
  box-sizing: border-box;
  width: 100%;
  padding-left: max(calc(50% - var(--container) / 2), 2rem);
  padding-right: max(calc(50% - var(--container) / 2), 2rem);
`;
