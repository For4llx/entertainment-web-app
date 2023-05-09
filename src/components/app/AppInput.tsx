import { bodyMedium, bodySmall } from "@/styles/Mixins";
import { styled } from "styled-components";

const InputField = styled.input`
  padding-bottom: 1rem;
  padding-left: 1rem;
  background-color: transparent;
  color: ${(props) => props.theme.white};
  caret-color: ${(props) => props.theme.red};
  border-bottom: 1px solid ${(props) => props.theme.greyishBlue};
  width: 336px;
  ${bodyMedium}

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
  display: none; /* stay until form validation */
  position: absolute;
  top: 1.1rem;
  right: 1rem;
  color: ${(props) => props.theme.red};
  ${bodySmall}
`;

interface IAppInput {
  placeholder: string;
}

const AppInput = ({ placeholder }: IAppInput) => {
  return (
    <AppInputContainer>
      <InputField placeholder={placeholder} />
      <InputError>Can't be empty</InputError>
    </AppInputContainer>
  );
};

export default AppInput;
