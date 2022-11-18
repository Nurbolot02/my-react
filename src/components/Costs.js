import CostItem from "./CostItem";
import "./Costs.css";
import Card from "./Card";
import CostFilter from "./CostFilter/CostsFilter";
import React, { useState } from "react";

export default function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("All");

  function changeYear(year) {
    setSelectedYear(year);
  }

  var costs = props.costs.filter(
    (cost) =>
      selectedYear == "All" || cost.costDate.getFullYear() == selectedYear
  );

  var costsContent = <p>В этом году нету расходов</p>;

  if (costs.length > 0) {
    costsContent = costs.map((cost) => (
      <CostItem
        key={cost.id}
        description={cost.costDescription}
        price={cost.costPrice}
        date={cost.costDate}
      />
    ));
  }

  return (
    <div>
      <Card className="costs">
        <CostFilter year={selectedYear} onChangeYear={changeYear}></CostFilter>
        {costsContent}
      </Card>
    </div>
  );
}
