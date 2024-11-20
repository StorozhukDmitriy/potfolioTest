import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <StyledSlide>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <Name>@ivan ivanow</Name>
        </StyledSlide>
      </FlexWrapper>
      <Pagination>
        <span> </span>
        <span> </span>
        <span> </span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  max-width: 500px;
  border: 2px solid black;
`;

const StyledSlide = styled.div`
  text-align: center;
`;

const Text = styled.p``;

const Name = styled.span``;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px;
    background-color: aqua;
  }
`;
