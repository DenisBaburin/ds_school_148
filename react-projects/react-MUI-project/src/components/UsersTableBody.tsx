import { TableBody, TableCell, TableRow } from "@mui/material";
import { IUser } from "../models";
import UserMenu from "./UserMenu";

export interface UserProps {
  user: IUser;
  index: number;
}

const UsersTableBody = ({ user, index }: UserProps) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>
          <UserMenu index={index} user={user} />
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

export default UsersTableBody;
