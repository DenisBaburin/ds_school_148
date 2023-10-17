import { TableBody, TableCell, TableRow } from "@mui/material";
import { IPhone } from "../../models";

interface PhoneProps {
  phone: IPhone;
}

const TableMainBody = ({ phone }: PhoneProps) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>{phone.made}</TableCell>
        <TableCell>{phone.model}</TableCell>
        <TableCell>{phone.hardware.camera}</TableCell>
        <TableCell>{phone.hardware.memory}</TableCell>
        <TableCell>{phone.hardware.screen}</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default TableMainBody;
