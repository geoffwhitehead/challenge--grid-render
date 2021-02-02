import styled from "styled-components";
import { Colors } from "../consts";

type CellProps = {
  color: Colors;
};

export const Cell = styled.div<CellProps>`
  background-color: ${(props) => props.color};
  width: 5px;
  height: 5px;
`;
