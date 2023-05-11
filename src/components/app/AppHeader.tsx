import { container } from "@/styles/Mixins";
import { styled } from "styled-components";

const AppHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${container}
`;

export default AppHeader;
