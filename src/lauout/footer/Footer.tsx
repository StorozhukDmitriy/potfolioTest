import React from "react";
import { Icon } from "../../components/icon/Icon";
import { S } from "../footer/Footer_Styled";
const footerData = [
  {
    iconId: "instagramm",
    width: "21px",
    height: "21px",
    viewBox: "0 0 21 21",
  },
  {
    iconId: "telegramm",
    width: "21px",
    height: "21px",
    viewBox: "0 0 21 21",
  },
  {
    iconId: "vk",
    width: "21px",
    height: "21px",
    viewBox: "0 0 21 21",
  },
  {
    iconId: "linkendin",
    width: "21px",
    height: "21px",
    viewBox: "0 0 21 21",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.Name>Dmitrii</S.Name>
      <S.SocialList>
        {footerData.map((f) => {
          return (
            <S.SocialItem>
              <S.SocialIconLink>
                <Icon
                  iconId={f.iconId}
                  width={f.width}
                  height={f.height}
                  viewBox={f.viewBox}
                />
              </S.SocialIconLink>
            </S.SocialItem>
          );
        })}
      </S.SocialList>
      <S.Copyrigth>© 2024 Dmitrii Storozhuk, All Rights Reserved.</S.Copyrigth>
    </S.Footer>
  );
};
