import React from "react";

const FieldSelect = ({ label, id, name, options, value, onChange }) => {
  // Set the placeholder dynamically based on the label
  const placeholderText =
    label === "From"
      ? "Enter Origin"
      : label === "To"
      ? "Enter Destination"
      : `Enter ${label}`;

  return (
    <div className="relative boxTravel h-[75px] leading-normal cursor-pointer border-b-tertiarycolor border-b-[2px]">
    <label htmlFor={id} className="flex px-[20px] w-full h-full z-[1] pt-[30px] pb-[25px] justify-between top-0 absolute items-center pointer-events-none">
      <div className="leftLabel flex items-center relative top-[-5px]">
        <h3 className="leading-3 items-center text-[rgba(89,46,124,.5)] font-gotham-medium travelHeadTitle">
          {label}
        </h3>
        <span className="iconTrain ms-[5px] top-[-5px] relative flex items-center">
          <img src="../../public/assets/images/icon-train.svg" className="opacity-[.5] h-[15px] w-[15px]" alt="Train Icon" />
        </span>
      </div>
    </label>
    <div className="customSelect w-full h-full  absolute inset-0 z-[1]">
      <select
        id={id}
        name={name}
        onChange={onChange}
        className="fieldSelect form-select w-full relative  appearance-none outline-none bg-transparent border-0 !text-[rgba(89,46,124,.5)] font-gotham-medium  cursor-pointer"
      >
        <option value="" disabled selected>
          {placeholderText}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </div>
  );
};

export default FieldSelect;
