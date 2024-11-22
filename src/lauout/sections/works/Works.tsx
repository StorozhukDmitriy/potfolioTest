import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import SociakNetwork from "../../../assets/images/proj1.webp";
import Timer from "../../../assets/images/proj2.webp";
import { Container } from "../../../components/Container";
import { TabMenu } from "./tabMenu/TabMenu";
const items = ["All", "landing page", "React", "spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={items} />
        <FlexWrapper justify="space-between" align="flex-start">
          <Work
            title={"Social Network"}
            src={SociakNetwork}
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <Work
            title={"Timer"}
            src={Timer}
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  background-color: aqua;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
