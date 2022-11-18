import "./CostForm.css";
import React, { useState } from "react";

export default function CostFom(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      id: Math.round(Math.random() * 1000),
      costDescription: name,
      costPrice: price,
      costDate: new Date(date),
    };
    props.onSaveCostDataHandler(costData);
    CancelButtonHandler();
  };

  const CancelButtonHandler = () => {
    props.onClickCancelButton(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__control">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={name} onChange={nameChangeHandler}></input>
        </div>

        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
            value={price}
          ></input>
        </div>

        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="datetime-local"
            min="2000-01-01"
            onChange={dateChangeHandler}
            value={date}
          ></input>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button type="button" onClick={CancelButtonHandler}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
}
