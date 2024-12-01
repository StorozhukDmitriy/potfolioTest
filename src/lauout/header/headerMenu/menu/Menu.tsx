import React from "react";
import {S} from "../HeaderMenu_Styles";
export const Menu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <ul>
      {props.menuItems.map((el, index) => {
        return (
          <S.MenuItem key={index}>
            <S.Link href="#">
              {el}
              <S.Mask>
                <span>{el}</span>
              </S.Mask>
              <S.Mask>
                <span>{el}</span>
              </S.Mask>
            </S.Link>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
