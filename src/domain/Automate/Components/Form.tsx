import React from "react";
import { Button, Form as FormAntd, Input, Select } from "antd";

import {
  useGetSheetsQuery,
  useGetSpreadSheetsQuery,
} from "../../../Modules/rtk/query";

const Form = () => {
  const [form] = FormAntd.useForm();
  const { info, token } = JSON.parse(localStorage.getItem("auth") || "{}");

  const { isLoading: isLoadingSpreadsheets, data: spreadSheetsData } =
    useGetSpreadSheetsQuery(
      {
        auth: token,
        email: info.email,
      },
      {
        skip: !token || !info.email,
      }
    );

  const spreadSheetsId = FormAntd.useWatch("spreadsheetId", form);
  const { isLoading: isLoadingSheets, data: sheetsData } = useGetSheetsQuery(
    {
      auth: token,
      spreadSheetsId: spreadSheetsId,
    },
    {
      skip: !spreadSheetsId,
    }
  );

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <FormAntd form={form} onFinish={submitForm} name="form">
      <FormAntd.Item
        name="spreadsheetId"
        label="Escolha qual planilha deseja automatizar"
        required
      >
        <Select style={{ width: "200px" }} disabled={isLoadingSpreadsheets}>
          {spreadSheetsData?.data?.map((option, index) => (
            <Select.Option value={option.id || ""} key={index}>
              {option.name}
            </Select.Option>
          ))}
        </Select>
      </FormAntd.Item>
      <FormAntd.Item
        name="sheetsId"
        label="Escolha em qual aba deseja inserir os dados"
        required
      >
        <Select
          style={{ width: "200px" }}
          disabled={isLoadingSheets || !sheetsData}
        >
          {sheetsData?.data?.sheets?.map(({ properties }, index) => (
            <Select.Option value={properties.sheetId || ""} key={index}>
              {properties.title}
            </Select.Option>
          ))}
        </Select>
      </FormAntd.Item>
      <FormAntd.Item
        name="range"
        label="Selecione o range que deseja adicionar os dados"
        required
      >
        <Input type="text" placeholder="A:A" />
      </FormAntd.Item>
      <FormAntd.Item
        name="product"
        label="Escreva o nome da coluna e o campo que irá preenche-la "
        required
      >
        <Input.TextArea
          rows={6}
          style={{ width: "300px" }}
          placeholder={`{
  Coluna 1: payment,
  Coluna 2: date_created,
  Coluna 3: status  
}`}
        />
      </FormAntd.Item>
      <FormAntd.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </FormAntd.Item>
    </FormAntd>
  );
};

export { Form };
