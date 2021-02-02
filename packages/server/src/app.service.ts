import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import { maxBy } from "lodash";
import { FormattedResponse, ParsedHouse } from "./types";

export const parseHouseData = (houseData: string): ParsedHouse[] =>
  houseData.split("\n").map((house) => {
    const [x, y, price] = house.split(" ");
    return {
      x: parseInt(x),
      y: parseInt(y),
      price: parseInt(price),
    };
  });

export const formatHouseData = (
  parsedHouseData: ParsedHouse[]
): FormattedResponse => {
  const maxRange = maxBy(parsedHouseData, (house) => house.price).price;
  return parsedHouseData.reduce((acc, { x, y, price }) => {
    const percentile = Math.round((price / maxRange) * 100);
    return {
      ...acc,
      [x]: {
        ...acc[x],
        [y]: percentile,
      },
    };
  }, {});
};

@Injectable()
export class AppService {
  async findAll(): Promise<FormattedResponse> {
    const file = `${__dirname}/assets/data.txt`;

    const data = fs.readFileSync(file, "utf-8");

    const parsedData = parseHouseData(data);

    return formatHouseData(parsedData);
  }
}
