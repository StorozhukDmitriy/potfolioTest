import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

const Footer = styled.footer`
  background-color: ${Theme.colors.primaryBg};
  text-align: center;
  margin: 40px 0;
`;
const Name = styled.span`
  ${font({
    family: "Josefin Sans, sans-serif",
    weight: 700,
    Fmax: 22,
    Fmin: 16,
  })};

  letter-spacing: 3px;
`;
const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
`;
const SocialItem = styled.li``;

const SocialIconLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${Theme.colors.accent};
  &:hover {
    transform: translateY(-4px);
    background-color: ${Theme.colors.accent};
    color: ${Theme.colors.primaryBg};
  }
`;

const Copyrigth = styled.small`
  font-weight: 400;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;

export const S = {
  Footer,
  Name,
  SocialList,
  SocialItem,
  SocialIconLink,
  Copyrigth,
};
