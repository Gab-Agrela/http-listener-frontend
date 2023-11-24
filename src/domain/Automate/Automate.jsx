import { useState } from "react";
import styled from "styled-components";

const Automate = () => {
  const [select1Value, setSelect1Value] = useState("");
  const [select2Value, setSelect2Value] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSelect1Change = (e) => {
    setSelect1Value(e.target.value);
  };

  const handleSelect2Change = (e) => {
    setSelect2Value(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <FormContainer>
      <select value={select1Value} onChange={handleSelect1Change}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>

      <select value={select2Value} onChange={handleSelect2Change}>
        <option value="optionA">Option A</option>
        <option value="optionB">Option B</option>
      </select>

      <input type="text" value={inputValue} onChange={handleInputChange} />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  select,
  input {
    padding: 8px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
    width: 200px;
  }
  select {
    appearance: none;
  }

  select:hover,
  input:hover,
  select:focus,
  input:focus {
    border-color: #242424;
  }
`;

export { Automate };
