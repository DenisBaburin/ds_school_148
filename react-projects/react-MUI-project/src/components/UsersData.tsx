import { TableBody, TableCell, TableRow } from "@mui/material";
import { IUser } from "../models";
import UserMenu from "./UserMenu";

interface UserProps {
  user: IUser;
}

const UsersData = ({ user }: UserProps) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>
          <UserMenu />
        </TableCell>
        <TableCell>{user.name.firstname}</TableCell>
        <TableCell>{user.name.lastname}</TableCell>
        <TableCell>{user.username}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.phone}</TableCell>
        <TableCell>{user.address.city}</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default UsersData;
