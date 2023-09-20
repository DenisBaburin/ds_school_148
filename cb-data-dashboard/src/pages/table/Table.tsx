import {
  TableContainer,
  TableRow,
  Table,
  TableCell,
  Paper,
  TableHead,
  IconButton,
  TableBody,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";

type Props = {};

const users = [
  { name: "Ivan", surname: "Ivanov", age: 23, sex: "Male" },
  { name: "Sergey", surname: "Sergeev", age: 41, sex: "Male" },
  { name: "Anna", surname: "Ivanovf", age: 25, sex: "Female" },
  { name: "Inna", surname: "Kotova", age: 38, sex: "Female" },
  { name: "Slava", surname: "Li", age: 43, sex: "Male" },
];

const someTable = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "grey" }}>
            <TableRow>
              <TableCell>Add new user</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Sex</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow>
                <TableCell>
                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    ...
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Add new user</MenuItem>
                    <MenuItem onClick={handleClose}>
                      Delete current user
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Edit current user</MenuItem>
                  </Menu>
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.surname}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.sex}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default someTable;
