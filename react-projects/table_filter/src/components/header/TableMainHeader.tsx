import { TableCell, TableRow } from "@mui/material";
import TableHead from "@mui/material/TableHead";

const TableMainHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: 700 }}>Manufacturer</TableCell>
        <TableCell sx={{ fontWeight: 700 }}>Model</TableCell>
        <TableCell sx={{ fontWeight: 700 }}>Camera</TableCell>
        <TableCell sx={{ fontWeight: 700 }}>Memory</TableCell>
        <TableCell sx={{ fontWeight: 700 }}>Screen size</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableMainHeader;
