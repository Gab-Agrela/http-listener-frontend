import React from "react";
import styled from "styled-components";

import { Spin } from "../../Commom/Components/Spin";
import { useGetSpreadSheetsQuery } from "../../Modules/rtk/query";
import { SelectForm } from "./Components/SelectForm";

const Automate = () => {
  const { info, token } = JSON.parse(localStorage.getItem("auth") || "{}");
  const { isLoading, data } = useGetSpreadSheetsQuery({
    auth: token,
    email: info.email,
  });
  return (
    <FormContainer>
      {isLoading ? <Spin /> : <SelectForm data={data} />}
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
