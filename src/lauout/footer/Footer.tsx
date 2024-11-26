import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Name>Dmitrii</Name>
      <SocialList>
        <SocialItem>
          <SocialIconLink>
            <Icon
              iconId="instagramm"
              width="21px"
              height="21px"
              viewBox="0 0 21 21"
            />
          </SocialIconLink>
        </SocialItem>
        <SocialItem>
          <SocialIconLink>
            <Icon
              iconId="telegramm"
              width="21px"
              height="21px"
              viewBox="0 0 21 21"
            />
          </SocialIconLink>
        </SocialItem>
        <SocialItem>
          <SocialIconLink>
            <Icon iconId="vk" width="21px" height="21px" viewBox="0 0 21 21" />
          </SocialIconLink>
        </SocialItem>
        <SocialItem>
          <SocialIconLink>
            <Icon
              iconId="linkendin"
              width="21px"
              height="21px"
              viewBox="0 0 21 21"
            />
          </SocialIconLink>
        </SocialItem>
      </SocialList>
      <Copyrigth>© 2024 Dmitrii Storozhuk, All Rights Reserved.</Copyrigth>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${Theme.colors.primaryBg};
  text-align: center;
  margin: 40px 0;
`;
const Name = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 22px;
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
