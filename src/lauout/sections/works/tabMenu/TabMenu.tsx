import styled from "styled-components";
import { Link } from "../../../../components/Link";

export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((el, index) => {
          return (
            <ListItem key={index}>
              <Link href="#">{el}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    max-width: 352px;
    width: 100%;
    justify-content: space-between;
    list-style: none;
    margin: 0 auto 40px;
    a {
      text-decoration: none;
    }
  }
`;

const ListItem = styled.li`
  /* padding: 10px; */
`;
