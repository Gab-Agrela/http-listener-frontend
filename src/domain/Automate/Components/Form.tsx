import React from "react";

const SelectForm = ({ data }) => {
  return (
    <select>
      {data.data.map((option, index) => (
        <option key={index} id={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export { SelectForm };
