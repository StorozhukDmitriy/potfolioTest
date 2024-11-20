import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";

export const Footer = () => {
  return (
    <StyledFooter>
      <Name>Dmitrii</Name>
      <SocialList>
        <SocialItem>
          <SocialIconLink>
            <Icon
              iconId="instagramm"
              width="28px"
              height="28px"
              viewBox="0 0 28 28"
            />
          </SocialIconLink>
        </SocialItem>
        <SocialItem>
          <SocialIconLink>
            <Icon
              iconId="telegramm"
              width="28px"
              height="28px"
              viewBox="0 0 28 28"
            />
          </SocialIconLink>
        </SocialItem>
        <SocialItem>
          <SocialIconLink>
            <Icon iconId="vk" width="28px" height="28px" viewBox="0 0 28 28" />
          </SocialIconLink>
        </SocialItem>
        <SocialItem>
          <SocialIconLink>
            <Icon
              iconId="linkendin"
              width="28px"
              height="28px"
              viewBox="0 0 28 28"
            />
          </SocialIconLink>
        </SocialItem>
      </SocialList>
      <Copyrigth>© 2023 Dmitrii Storozhuk, All Rights Reserved.</Copyrigth>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: aqua;
  min-height: 30vh;
  text-align: center;
`;
const Name = styled.span``;
const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  li + li {
    margin-left: 10px;
  }
`;
const SocialItem = styled.li`
  list-style: none;
`;
const SocialIconLink = styled.a``;
const Copyrigth = styled.small``;
