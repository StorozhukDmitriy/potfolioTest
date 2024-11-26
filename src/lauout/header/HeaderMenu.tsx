import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <HeaderStyledMenu>
      <ul>
        {props.menuItems.map((el, index) => {
          return (
            <ListItem key={index}>
              <Link href="#">
                {el}
                <Mask>
                  <span>{el}</span>
                </Mask>
                <Mask>
                  <span>{el}</span>
                </Mask>
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </HeaderStyledMenu>
  );
};

const HeaderStyledMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
    @media ${Theme.media.tablet} {
      display:none;
    }
  }
`;

const Link = styled.a`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  /* color: #7572d5; */
  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${Theme.colors.accent};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const ListItem = styled.li`
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${Theme.colors.accent};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
  }

  &:hover {
    &::before{
        transform: scale(1);
    }
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${Theme.colors.font};
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
        color: ${Theme.colors.font};
      }
    }
  }
`;
