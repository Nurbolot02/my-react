import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "./Card";

export default function CostItem(props) {
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{props.description}</h2>
        <div className="cost-item__price">${props.price}</div>
      </div>
    </Card>
  );
}
