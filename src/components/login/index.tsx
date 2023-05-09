import { bodyMedium } from "@/styles/Mixins";
import Link from "next/link";
import { styled } from "styled-components";
import AppButton from "../app/AppButton";
import AppFlex from "../app/AppFlex";
import AppHeading from "../app/AppHeading";
import AppInput from "../app/AppInput";
import AppParagraph from "../app/AppParagraph";

const LoginContainer = styled.article`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: ${(props) => props.theme.semiDarkBlue};
  width: fit-content;
  border-radius: 20px;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.red};
  ${bodyMedium}
`;

const LoginInputGoup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Login = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <AppHeading large>Login</AppHeading>
        <LoginInputGoup>
          <AppInput placeholder="Email address" />
          <AppInput placeholder="Password" />
        </LoginInputGoup>
        <AppButton>Login to your account</AppButton>
      </LoginForm>
      <AppFlex gap="0.5rem">
        <AppParagraph>Don't have an account?</AppParagraph>
        <StyledLink href="register">Sign Up</StyledLink>
      </AppFlex>
    </LoginContainer>
  );
};
