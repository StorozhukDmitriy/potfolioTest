import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Button = styled.button`
  background-color: transparent;
  width: 170px;
  height: 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${Theme.colors.font};
  position: relative;
  z-index: 0;
  &:hover {
    &::before {
      width: 100%;
      height: 100%;
    }
  }
  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 77px;
    height: 10px;
    background-color: ${Theme.colors.accent};
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;
