import { styled } from "styled-components";
import Link from "next/link";
import AppIconNavHome from "../app/AppIconNavHome";
import AppIconNavMovies from "../app/AppIconNavMovies";
import AppIconNavTvSeries from "../app/AppIconNavTvSeries";
import AppIconNavBookMark from "../app/AppIconNavBookMark";
import { usePathname } from "next/navigation";

interface INavigationLink {
  pathName: string;
}

const NavigationLink = styled(Link)<INavigationLink>`
  fill: ${(props) =>
    props.pathName === props.href
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
`;

const NavigationContainer = styled.nav``;

export const Navigation = () => {
  const pathName = usePathname();
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem>
          <NavigationLink pathName={pathName} href="/">
            <AppIconNavHome />
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink pathName={pathName} href="movies">
            <AppIconNavMovies />
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink pathName={pathName} href="tv-series">
            <AppIconNavTvSeries />
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink pathName={pathName} href="bookmark">
            <AppIconNavBookMark />
          </NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};
