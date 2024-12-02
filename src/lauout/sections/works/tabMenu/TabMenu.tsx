import styled from "styled-components";
import { Link } from "../../../../components/Link";

export type TabsStatusType = "all" | "landing" | "react" | "spa";

type TabMenuPropsType = {
  tabsItems: Array<{
    title: string;
    status: TabsStatusType;
  }>;
  changeFilterStatus: (value: TabsStatusType) => void;
  currentFilterStatus: string;
};

export const TabMenu = (props: TabMenuPropsType) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabsItems.map((el, index) => {
          return (
            <ListItem key={index}>
              <Link
                active={props.currentFilterStatus === el.status}
                as={"button"}
                onClick={() => {
                  props.changeFilterStatus(el.status);
                }}
              >
                {el.title}
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    max-width: 352px;
    width: 100%;
    justify-content: space-between;
    list-style: none;
    margin: 0 auto 40px;
    a {
      text-decoration: none;
    }
  }
`;

const ListItem = styled.li`
  /* padding: 10px; */
`;
