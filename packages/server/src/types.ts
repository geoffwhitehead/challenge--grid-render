export type House = {
  x: number;
  y: number;
  price: number;
  percentile: number;
};

export type ParsedHouse = Omit<House, "percentile">;

export type FormattedResponse = Record<string, Record<string, House>>;
