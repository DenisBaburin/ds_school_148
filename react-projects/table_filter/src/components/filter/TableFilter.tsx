import { FormControl, InputLabel } from "@mui/material";
import React from "react";

interface TableFilterProps {
  children: React.ReactNode;
}

const TableFilter = ({ children }: TableFilterProps) => {
  return (
    <FormControl sx={{ width: "200px" }}>
      <InputLabel>Select model</InputLabel>
      {children}
    </FormControl>
  );
};

export default TableFilter;
