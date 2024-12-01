import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const Slider = styled.div`
  max-width: 500px;
`;

const Slide = styled.div`
  text-align: center;
`;


const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;

const Name = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  margin: 22px 0 42px;
  display: inline-block;
`;

const Pagination = styled.div`
  span {
    display: inline-block;
    border-radius: 20px;
    width: 7px;
    height: 7px;
    background: rgba(255, 255, 255, 0.5);
    position: relative;
    & + span {
      margin-left: 5px;
    }
    &.active {
      border-radius: 20px;
      width: 20px;
      height: 7px;
      background-color: ${Theme.colors.accent};
    }
  }
`;

export const S = {
  Slider,
  Slide,
  Text,
  Name,
  Pagination,
};
