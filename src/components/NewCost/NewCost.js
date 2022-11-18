import CostForm from "./CostForm";
import "./NewCost.css";
import React, { useState } from "react";

export default function NewCost(props) {
  function saveCostDataHandler(costData) {
    props.onAddCostHandler(costData);
  }

  const [showingComponent, setShowingComponent] = useState(false);

  const showComponentHandler = (flag = true) => {
    setShowingComponent(flag);
  };

  if (showingComponent) {
    return (
      <div className="new-cost">
        <CostForm
          onClickCancelButton={showComponentHandler}
          onSaveCostDataHandler={saveCostDataHandler}
        ></CostForm>
      </div>
    );
  }

  return (
    <div className="new-cost">
      <button onClick={showComponentHandler}>Добавить новый расход</button>
    </div>
  );
}
