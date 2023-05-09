import { styled } from "styled-components";
import Link from "next/link";
import AppIconNavHome from "../app/AppIconNavHome";
import AppIconNavMovies from "../app/AppIconNavMovies";
import AppIconNavTvSeries from "../app/AppIconNavTvSeries";
import AppIconNavBookMark from "../app/AppIconNavBookMark";
import { usePathname } from "next/navigation";

interface INavigationLink {
  pathname: string;
}

const NavigationLink = styled(Link)<INavigationLink>`
  fill: ${(props) =>
    props.pathname === props.href
      ? props.theme.white
      : props.theme.greyishBlue};
  &:hover {
    fill: ${(props) => props.theme.red};
  }
`;

const NavigationItem = styled.li``;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
  @media screen and (max-width: 375px) {
    gap: 1.5rem;
  }
`;

const NavigationContainer = styled.nav``;

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem>
          <NavigationLink pathname={pathname} href="/">
            <AppIconNavHome />
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink pathname={pathname} href="/movies">
            <AppIconNavMovies />
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink pathname={pathname} href="/tv-series">
            <AppIconNavTvSeries />
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink pathname={pathname} href="/bookmark">
            <AppIconNavBookMark />
          </NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};
