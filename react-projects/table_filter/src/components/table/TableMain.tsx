import { MenuItem, Select, SelectChangeEvent, Table } from "@mui/material";
import TableMainHeader from "../header/TableMainHeader";
import TableMainBody from "../body/TableMainBody";
import { phonesData } from "../../data/phones";
import TableFilter from "../filter/TableFilter";
import { useState } from "react";
import { IPhone } from "../../models";

const TableMain = () => {
  const [model, setModel] = useState("");
  const [phones, setPhones] = useState<IPhone[]>(phonesData);
  const filterValues = [...new Set(phones.map((model) => model.made))];

  const onChangeHandler = (event: SelectChangeEvent) => {
    setModel(event.target.value);
    console.log(model);
  };

  return (
    <>
      <TableFilter>
        <Select label="Select model" value={model} onChange={onChangeHandler}>
          {filterValues.map((item, i) => (
            <MenuItem value={item} key={i}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </TableFilter>
      <Table>
        <TableMainHeader />
        {phones.map((phone) => (
          <TableMainBody phone={phone} key={phone.id} />
        ))}
      </Table>
    </>
  );
};

export default TableMain;
