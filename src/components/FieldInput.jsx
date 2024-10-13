import React from 'react';

const FieldInput = ({
    id,
    name,
    type,
    value,
    onChange,
    error,
    placeholder,
    maxLength,
    spellCheck = false,
    autoComplete,
    variants,
    className
}) => {
  return (
    <>
       <input
        autoComplete={autoComplete}
        spellCheck={spellCheck}  // Set spellCheck attribute
          id={id}
          maxLength={maxLength}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${className} border-tertiarycolor transition-all duration-200 delay-200  border-2 placeholder:text-[rgba(89,46,124,.4)] leading-[38px]  block w-full h-[48px] md:h-[38px] xl:h-[48px]  px-[20px]  font-gotham-medium fieldInput text-tertiarycolor relative z-[1] outline-none rounded-[30px] ${variants === "primary" ? 'active' : 'inactive'}`}
        />
        {error && <div className="text-red-600 text-fs12vh text-sm font-avenir">{error}</div>}
    </>
  );
}

export default FieldInput;
