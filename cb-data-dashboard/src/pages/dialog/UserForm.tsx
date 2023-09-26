import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Stack,
  TextField,
  DialogActions,
} from "@mui/material";
import { Props } from "next/script";
import React, { useState } from "react";

const userData = { name: "", surname: "", age: "", sex: "" };

const UserForm = ({ setUser }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState(userData);

  const createUser = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setUser((prev) => [{ ...data }, ...prev]);
    setData(userData);
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
          sx={{ padding: "0px 24px" }}
        >
          <TextField
            helperText="Введите имя"
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
          ></TextField>
          <TextField
            helperText="Введите фамилию"
            onChange={(e) =>
              setData((prev) => ({ ...prev, surname: e.target.value }))
            }
          ></TextField>
          <TextField
            helperText="Введите возраст"
            onChange={(e) =>
              setData((prev) => ({ ...prev, age: e.target.value }))
            }
          ></TextField>
          <TextField
            helperText="Введите введите пол"
            onChange={(e) =>
              setData((prev) => ({ ...prev, sex: e.target.value }))
            }
          ></TextField>
        </Stack>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          <Button onClick={(e) => createUser(e)}>Добавить</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserForm;
