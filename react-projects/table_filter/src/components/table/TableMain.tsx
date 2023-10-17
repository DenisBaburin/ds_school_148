import { MenuItem, Select, Table } from "@mui/material";
import { useState } from "react";
import { phonesData } from "../../data/phones";
import { IPhone } from "../../models";
import TableMainBody from "../body/TableMainBody";
import TableFilter from "../filter/TableFilter";
import TableMainHeader from "../header/TableMainHeader";

const TableMain = () => {
  const filterValues = [
    "All models",
    ...new Set(phonesData.map((model) => model.made)),
  ];
  const [model, setModel] = useState("");
  const [phones, setPhones] = useState<IPhone[]>(phonesData);

  return (
    <>
      <TableFilter>
        <Select
          label="Select model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          {filterValues.map((item) => (
            <MenuItem
              value={item}
              key={item}
              onClick={(_e) =>
                item == "All models"
                  ? setPhones(phonesData)
                  : setPhones(phonesData.filter((phone) => phone.made == item))
              }
              sx={{ fontWeight: item == "All models" ? 700 : 400 }}
            >
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
