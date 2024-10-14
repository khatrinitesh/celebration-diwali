import React from "react";


const FieldSelectDateComp = () => {


  return (
    <>
      <div className="customSelectDate w-full">
        <select
          name="date"
          id="date-select"
          className="form-select w-full fieldSelect appearance-none border-0 placeholder:text-primarycolor text-primarycolor"
          defaultValue="Select Date" // Set the default value here
        >
          <option value="Select Date" disabled>
            Select Date
          </option>
          <option value="Fri, 18 Oct">Fri, 18 Oct</option>
          <option value="Sat, 19 Oct">Sat, 19 Oct</option>
          <option value="Sun, 20 Oct">Sun, 20 Oct</option>
          <option value="Mon, 21 Oct">Mon, 21 Oct</option>
        </select>
      </div>
    </>
  );
};

export default FieldSelectDateComp;
