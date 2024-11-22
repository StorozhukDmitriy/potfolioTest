import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Theme } from "../../styles/Theme";

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
        <span className="active"> </span>
        <span> </span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  max-width: 500px;
`;

const StyledSlide = styled.div`
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
