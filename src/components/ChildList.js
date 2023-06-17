import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBabies } from "../stores";
import { addBabies } from "../stores";
import Skeleton from "./Skeleton";
import Button from "./Button";

const ChildList = () => {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => {
    return state.babies;
  });

  useEffect(() => {
    dispatch(fetchBabies());
  }, [dispatch]);

  const handleAddBabies = () => {
    dispatch(addBabies());
  };

  if (isLoading) {
    return <Skeleton times={6}></Skeleton>;
  }

  if (error) {
    return <div>Error occured</div>;
  }

  const babiesList = data.map((baby) => {
    return (
      <div className="mb-2 border rounded" key={baby.id}>
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {baby.name}
        </div>
      </div>
    );
  });
  return (
    <div>
      <Button onClick={handleAddBabies} primary rounded className="mb-2">
        Add Babies
      </Button>
      {babiesList}
    </div>
  );
};

export default ChildList;
