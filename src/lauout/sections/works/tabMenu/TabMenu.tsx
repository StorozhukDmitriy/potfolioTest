import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
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
    justify-content: center;
    gap: 30px;
    list-style: none;
    margin-bottom: 40px;
    a {
      text-decoration: none;
    }
  }
`;

const ListItem = styled.li`
  /* padding: 10px; */

`;


