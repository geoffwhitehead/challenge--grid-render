import { memoize } from "lodash";
import React, { memo } from "react";
import { HouseData } from "../App";
import { colorRanges, Colors } from "../consts";
import { Cell } from "./Cell";
import { Row } from "./Row";

type GridProps = {
  houseData: HouseData;
  gridSize: number;
};

const getColor = (percentile: number) =>
  colorRanges.find(({ low, high }) => percentile >= low && percentile <= high)
    ?.color || Colors.white;

const memoizedGetColor = memoize(getColor);

export const GridInner: React.FC<GridProps> = ({ houseData, gridSize }) => {
  return (
    <div>
      {Array.from(Array(gridSize), (_, row) => (
        <Row>
          {Array.from(Array(gridSize), (__, column) => {
            const cellPercentile = houseData[row]?.[column];
            const color = cellPercentile
              ? memoizedGetColor(cellPercentile)
              : Colors.white;
            return <Cell color={color} />;
          })}
        </Row>
      ))}
    </div>
  );
};

export const Grid = memo(GridInner);
