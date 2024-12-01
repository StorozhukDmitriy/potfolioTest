import styled from "styled-components";

export const IconWrapper = styled.div`
  position: relative;
  z-index: 3;
  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);
    z-index: -1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`;