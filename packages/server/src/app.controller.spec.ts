import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService, formatHouseData, parseHouseData } from "./app.service";
import { ParsedHouse } from "./types";

const houseFactory = (x: number, y: number, price: number): ParsedHouse => ({
  x,
  y,
  price,
});

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("appController", () => {
    it("should correctly parse the houses data", async () => {
      const data = "60 23 40000\n58 66 30000\n61 62 80000\n61 91 100000";
      const actual = parseHouseData(data);
      const expected = [
        houseFactory(60, 23, 40000),
        houseFactory(58, 66, 30000),
        houseFactory(61, 62, 80000),
        houseFactory(61, 91, 100000),
      ];

      expected.map((house) => {
        expect(actual).toContainEqual(house);
      });
    });

    it("should correctly format the houses data", async () => {
      const data = [
        houseFactory(60, 23, 40000),
        houseFactory(58, 66, 30000),
        houseFactory(61, 62, 80000),
        houseFactory(61, 91, 100000),
      ];

      const actual = formatHouseData(data);

      const expected = {
        "58": {
          "66": 30,
        },
        "60": {
          "23": 40,
        },
        "61": {
          "62": 80,
          "91": 100,
        },
      };

      expect(actual).toEqual(expected);
    });
  });
});
