"use client";
import { bodyMedium, bodySmall } from "@/app/styles/Mixins";
import { styled } from "styled-components";

const InputField = styled.input`
  padding: 1rem;
  background-color: transparent;
  color: ${(props) => props.theme.white};
  caret-color: ${(props) => props.theme.red};
  width: 336px;
  ${bodyMedium}

  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.greyishBlue};
  }
  &:active {
    border-bottom: 1px solid ${(props) => props.theme.white};
  }
  &:invalid {
    border-bottom: 1px solid ${(props) => props.theme.red};
  }
`;

const AppInputContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const InputError = styled.p`
  position: absolute;
  top: 1.1rem;
  right: 1rem;
  color: ${(props) => props.theme.red};
  ${bodySmall}
`;

const AppInput = () => {
  return (
    <AppInputContainer>
      <InputField placeholder="Email address" />
      <InputError>Can't be empty</InputError>
    </AppInputContainer>
  );
};

export default AppInput;
