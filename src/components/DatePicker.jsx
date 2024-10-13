import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const DatePickerComp = () => {
  const [startDate, setStartDate] = useState(new Date());

    const formatDate = (date) => {
      return date ? format(date, 'EEE, dd MMM') : 'Select a date';
    };

  return (
    <>
      <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
           dateFormat="EEE, dd MMM"
          customInput={
            <input
              className="relative top-[2px] md:text-[16px] customDatePicker  outline-none !text-tertiarycolor !placeholder:text-[rgba(89,46,124,.4)]"
              readOnly
              value={formatDate(startDate)}
              placeholder="Select a date"
            />
          }
        />
    </>
  );
}

export default DatePickerComp;
