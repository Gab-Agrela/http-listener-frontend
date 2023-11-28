import React from "react";
import styled from "styled-components";
import { Form } from "./Components/Form";
import { useGetSpreadSheetsQuery } from "../../Modules/rtk/query";


const Automate = () => {
  return (
    <FormContainer>
      <h1>Automate Page</h1>
      <Form />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export { Automate };
