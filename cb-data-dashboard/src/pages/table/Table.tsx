import { MoreVert, PersonRemove, Settings } from "@mui/icons-material";
import PersonAdd from "@mui/icons-material/PersonAdd";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import React from "react";

type Props = {};

const users = [
  { name: "Ivan", surname: "Ivanov", age: 23, sex: "Male" },
  { name: "Sergey", surname: "Sergeev", age: 41, sex: "Male" },
  { name: "Anna", surname: "Ivanovf", age: 25, sex: "Female" },
  { name: "Inna", surname: "Kotova", age: 38, sex: "Female" },
  { name: "Slava", surname: "Li", age: 43, sex: "Male" },
];

const usersFiltered = users.filter((user) => user.age > 30);
// console.log(usersFiltered.sort((a, b) => a.age - b.age));
//console.log(usersFiltered.map((user) => user.name));

const someTable = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  type Props = {};

  const UserForm = (props: Props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Новый пользователь</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Введите данные нового пользователя.
            </DialogContentText>
          </DialogContent>
          <Stack
            direction="row"
            useFlexGap
            justifyContent="center"
            columnGap={"5%"}
          >
            <TextField helperText="Введите имя"></TextField>
            <TextField helperText="Введите фамилию"></TextField>
            <TextField helperText="Введите возраст"></TextField>
            <TextField helperText="Введите введите пол"></TextField>
          </Stack>
          <DialogActions>
            <Button onClick={handleClose}>Отменить</Button>
            <Button onClick={handleClose}>Добавить</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  return (
    <div>
      <UserForm></UserForm>
      <TableContainer component={Paper} sx={{ width: "1000px" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "grey" }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Sex</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.name}>
                <TableCell>
                  <IconButton onClick={handleClick}>
                    <MoreVert />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Add new user
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <PersonRemove fontSize="small" />
                      </ListItemIcon>
                      Delete current user
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Edit current user
                    </MenuItem>
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
