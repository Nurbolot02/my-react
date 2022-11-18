import Costs from "./components/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: 1,
    costDate: new Date(),
    costDescription: "Jeans",
    costPrice: 50,
  },
  {
    id: 2,
    costDate: new Date(2021, 2, 5),
    costDescription: "mackBook",
    costPrice: 1500,
  },
  {
    id: 3,
    costDate: new Date(2021, 5, 10),
    costDescription: "freezer",
    costPrice: 800,
  },
];

function App(event) {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  function addCostHandler(costData) {
    setCosts((prevCosts) => {
      return [costData, ...prevCosts];
    });
  }

  return (
    <div className="NTG">
      <NewCost onAddCostHandler={addCostHandler}></NewCost>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
