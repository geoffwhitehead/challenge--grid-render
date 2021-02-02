export enum Colors {
  green = "green",
  lightgreen = "lightgreen",
  yellow = "yellow",
  pink = "pink",
  red = "red",
  white = "white",
}

export const colorRanges = [
  {
    low: 0,
    high: 5,
    color: Colors.green,
  },
  {
    low: 6,
    high: 25,
    color: Colors.lightgreen,
  },
  {
    low: 26,
    high: 75,
    color: Colors.yellow,
  },
  {
    low: 76,
    high: 95,
    color: Colors.pink,
  },
  {
    low: 96,
    high: 100,
    color: Colors.red,
  },
];
