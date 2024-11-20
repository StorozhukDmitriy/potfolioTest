import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((el, index) => {
          return (
            <li key={index}>
              <a href="#">{el}</a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
    list-style: none;
    a {
      text-decoration: none;
    }
  }
`;
