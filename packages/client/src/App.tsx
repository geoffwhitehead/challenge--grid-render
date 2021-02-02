import React, { useEffect, useState } from "react";
import { Grid } from "./components/Grid";

export type HouseData = Record<string, Record<string, number>>;

const App: React.FC = () => {
  const [houseData, setHouseData] = useState<HouseData>();

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3001/houses");
      const data = await response.json();
      setHouseData(data);
    })();
  }, [setHouseData]);

  if (!houseData) {
    return <p>House data is loading ...</p>;
  }

  return <Grid gridSize={100} houseData={houseData} />;
};

export default App;
