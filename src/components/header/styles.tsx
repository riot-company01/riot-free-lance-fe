import styled from "@emotion/styled";
import { COLOR } from "@/styles/colors";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${COLOR.WHITE.code};
  padding: 20px;
`;

export const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const ListItem = styled.li`
  margin-right: 20px;
`;
