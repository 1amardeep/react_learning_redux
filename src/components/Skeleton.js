import React from "react";

const Skeleton = ({ times }) => {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div
          key={i}
          className="animate-pulse bg-slate-200 rounded h-6 mt-2"
        ></div>
      );
    });
  return boxes;
};

export default Skeleton;
