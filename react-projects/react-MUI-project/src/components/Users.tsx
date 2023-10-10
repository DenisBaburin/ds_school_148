import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import UsersData from "./UsersData";
import axios from "axios";
import { useState, useEffect } from "react";
import { IUser } from "../models";
//import { users } from "../data/users";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  async function fetchUsers() {
    const response = await axios.get<IUser[]>("https://fakestoreapi.com/users");
    setUsers(response.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "1000px", marginTop: "20px" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Surname</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Username</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Phone</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>City</TableCell>
          </TableRow>
        </TableHead>
        {users.map((user) => (
          <UsersData user={user} />
        ))}
      </Table>
    </TableContainer>
  );
};

export default Users;
