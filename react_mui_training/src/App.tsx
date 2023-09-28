import { useState } from "react";
import "./App.css";
import UserForm from "./components/dialog/UserForm";
import Table from "./components/table";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Icon,
  Paper,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function App() {
  // const [users, setUser] = useState(["Timofey", "Denis"]);
  // const [newUser, setNewUser] = useState("");
  // const addUser = () => {
  //   setUser([...users, newUser]);
  //   console.log(users);
  // };
  // const handleDeleteUser = (index: number) => {
  //   const userList = [...users];
  //   userList.splice(index, 1);
  //   setUser(userList);
  //   //console.log(users);
  // };
  // return (
  //   <div>
  //     <Button onClick={addUser}>Нажми меня</Button>
  //     <TextField onChange={(event) => setNewUser(event.target.value)} />
  //     {users.map((user, index) => (
  //       <Paper
  //         onClick={() => handleDeleteUser(index)}
  //         sx={{
  //           margin: "2px",
  //           backgroundColor: "greenyellow",
  //           color: "blue",
  //           display: "flex",
  //           justifyContent: "end",
  //         }}
  //       >
  //         {user}
  //       </Paper>
  //     ))}
  //   </div>
  // );
  const initialNotes = [
    { text: "Встать в 6:30", status: true },
    { text: "Умыться и покушать", status: false },
  ];

  const [notes, setNote] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");
  const [isDark, setSwitch] = useState(false);
  const noteField = document.getElementById("note");

  const addNote = () => {
    setNote([...notes, { text: newNote, status: false }]);
    setNewNote("");
    noteField.value = "";
  };

  const handleStatusChange = (index: number) => {
    const notesList = [...notes];
    notesList[index].status = !notesList[index].status;
    setNote(notesList);
    //console.log(notesList);
  };

  const handleNoteDelete = (index: number) => {
    const notesList = [...notes];
    notesList.splice(index, 1);
    setNote(notesList);
    console.log(notesList);
  };

  const handleOnClick = () => {
    setSwitch(!isDark);
  };

  return (
    <Stack
      sx={{
        backgroundColor: isDark ? "yellowgreen" : "darkgray",
        color: isDark ? "white" : "black",
        padding: "25px",
        width: "500px",
        display: "flex",
      }}
    >
      <Stack>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked onChange={handleOnClick} />}
            label={"Переключить тему"}
          />
        </FormGroup>
        <TextField
          placeholder="Добавьте заметку"
          onChange={(event) => setNewNote(event.target.value)}
          id="note"
          sx={{ backgroundColor: "white", marginBottom: "5px" }}
        ></TextField>
      </Stack>
      <Stack>
        <Button
          sx={{
            backgroundColor: "beige",
            marginBottom: "5px",
          }}
          onClick={newNote != "" ? addNote : () => alert("добавьте заметку")}
        >
          Добавить заметку
        </Button>
      </Stack>
      {notes.map((note, index) => (
        <Box
          sx={{
            display: "flex",
            marginBottom: "5px",
          }}
        >
          <Paper
            sx={{
              width: "500px",
              lineHeight: "2",
              marginRight: "5px",
              height: "36px",
              color: "#1976d2",
              textDecorationLine: notes[index].status ? "line-through" : "",
            }}
          >
            {note.text}
          </Paper>
          <Button
            sx={{ marginRight: "5px" }}
            variant="contained"
            color={notes[index].status ? "success" : "error"}
            onClick={() => handleStatusChange(index)}
          >
            <DoneIcon />
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleNoteDelete(index)}
          >
            <DeleteForeverIcon />
          </Button>
        </Box>
      ))}
    </Stack>
  );
}

export default App;
