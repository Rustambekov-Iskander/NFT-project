import React, { FC } from "react";
import cl from "./Select.module.scss";

interface ISelect {
  defaultValue: string;
  options: any[];
  onChange: (value: any) => void;
}

const Select: FC<ISelect> = ({defaultValue, options, onChange}) => {
  return (
    <>
      <select
        className={cl.select}
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
