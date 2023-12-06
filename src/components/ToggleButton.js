import React, { useState } from "react";

const ToggleButton = (props) => {
  const { isSelected, setIsSelected, leftLabel, rightLabel } = props;
  return (
    <div className="flex">
      <div>
        <p className="text-sm text-slate-700">{leftLabel}</p>
      </div>
      <div
        className={`h-5 w-10    rounded-full  m-1 flex shadow-lg ${
          isSelected
            ? "bg-red-600 flex-row-reverse transition-all duration-1000"
            : "bg-gray-400"
        }`}
        onClick={() => setIsSelected(!isSelected)}
      >
        <span
          className={`h-5 w-5 rounded-full bg-gray-200 transition-all duration-1000`}
        ></span>
      </div>
      <div>
        <p className="text-sm text-slate-700">{rightLabel}</p>
      </div>
    </div>
  );
};

export default ToggleButton;
