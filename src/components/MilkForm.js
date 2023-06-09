import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addMilk, updateMilk, changeQuantity } from "../stores";
import MilkTimePicker from "./MilkTimePicker";
import Button from "./Button";

const MilkForm = ({ type, closeTheModal }) => {
  const dispatch = useDispatch();
  const Btn_text = type === "add" ? "Submit" : "Update";
  const { id, name, quantity, startTime, endTime } = useSelector((state) => {
    return state.forms;
  });

  const handleOnQuantityChange = (event) => {
    dispatch(changeQuantity(parseFloat(event.target.value) || ""));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "add") {
      dispatch(
        addMilk({
          name,
          startTime,
          endTime,
          quantity,
        })
      );
    } else {
      dispatch(
        updateMilk({
          id,
          name,
          quantity,
          startTime,
          endTime,
        })
      );
    }
    closeTheModal();
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        {/* <div className="field">
          <label htmlFor="addMilk" className="label">
            Milk Name
          </label>
          <div className="control">
            <input
              id="addMilk"
              className="input"
              type="text"
              value={name}
              onChange={handleOnNameChange}
            />
          </div>
        </div> */}
        <div className="field">
          <label htmlFor="addMilkStartTime" className="label">
            Start Time
          </label>
          <div className="control">
            <MilkTimePicker type="startTime" time={startTime}></MilkTimePicker>
          </div>
        </div>
        <div className="field">
          <label htmlFor="addMilkEndTime" className="label">
            End Time
          </label>
          <div className="control">
            <MilkTimePicker type="endTime" time={endTime}></MilkTimePicker>
          </div>
        </div>
        <div className="field">
          <label htmlFor="addQuantity" className="label">
            Milk Quantity (ml)
          </label>
          <div className="control">
            <input
              id="addQuantity"
              type="number"
              className="input"
              value={quantity}
              onChange={handleOnQuantityChange}
            />
          </div>
        </div>
        <div className="flex">
          <Button primary rounded>
            {Btn_text}
          </Button>
          <Button className="ml-1" danger rounded onClick={closeTheModal}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MilkForm;
