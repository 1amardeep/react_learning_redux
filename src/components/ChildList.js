import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBabies } from "../stores";
import Skeleton from "./Skeleton";

const ChildList = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => {
    return state.babies;
  });
  useEffect(() => {
    dispatch(fetchBabies());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton times={6}></Skeleton>;
  }

  if (error) {
    return <div>Error occured</div>;
  }

  const babiesList = data.map((baby) => {
    return (
      <div
        key={baby.id}
        className="flex p-2 justify-between items-center cursor-pointer"
      >
        {baby.name}
      </div>
    );
  });
  return <div> {babiesList}</div>;
};

export default ChildList;
