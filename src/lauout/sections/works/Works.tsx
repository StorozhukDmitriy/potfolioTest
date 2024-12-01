import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import SociakNetwork from "../../../assets/images/proj1.webp";
import Timer from "../../../assets/images/proj2.webp";
import { Container } from "../../../components/Container";
import { TabMenu } from "./tabMenu/TabMenu";
import { S } from "../works/Works_Style";
import React from "react";

const items = ["All", "landing page", "React", "spa"];
const workData = [
  {
    title: "Social Network",
    src: SociakNetwork,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Timer",
    src: Timer,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
  },
];
export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={items} />
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          {workData.map((w) => {
            return <Work title={w.title} src={w.src} text={w.text} />;
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
