import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import {
  IconButton,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import useUsers from "../hooks/users";
import { IUser } from "../models";
import CreateUser from "./CreateUser";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import ModalWindow from "./ModalWindow";
import UsersTableBody from "./UsersTableBody";

const UsersTable = () => {
  const { loading, error, users, addUser } = useUsers();
  const [modal, setModal] = useState(false);
  console.log(users);
  const createHandler = (user: IUser) => {
    setModal(false);
    addUser(user);
  };

  return (
    <>
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

          {users.map((user, index) => (
            <UsersTableBody user={user} key={user.id} index={index} />
          ))}
        </Table>

        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}

        {modal && (
          <ModalWindow title="Create new user" onClose={() => setModal(false)}>
            <CreateUser onCreate={createHandler} />
          </ModalWindow>
        )}
      </TableContainer>
      <IconButton
        sx={{ position: "fixed", bottom: 50, right: 50 }}
        onClick={() => setModal(true)}
      >
        <PersonAddAlt1RoundedIcon sx={{ fontSize: 50 }} />
      </IconButton>
    </>
  );
};

export default UsersTable;
