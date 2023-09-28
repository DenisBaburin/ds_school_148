import { useState } from "react";
import "./App.css";
import UserForm from "./components/dialog/UserForm";
import Table from "./components/table";
import { Box, Button, Icon, Paper, Stack, TextField } from "@mui/material";
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

  return (
    <Stack>
      <Stack sx={{ minWidth: "440px" }}>
        <TextField
          placeholder="Добавьте заметку"
          onChange={(event) => setNewNote(event.target.value)}
          id="note"
        ></TextField>
      </Stack>
      <Stack>
        <Button
          sx={{
            backgroundColor: "beige",
            border: "solid",
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
            justifyContent: "space-between",
            gap: "2px",
            alignItems: "center",
            width: "500px",
            margin: "2px",
          }}
        >
          <Paper
            sx={{
              width: "440px",
              lineHeight: "2",
              border: "solid",
              color: "#1976d2",
              textDecorationLine: notes[index].status ? "line-through" : "",
            }}
          >
            {note.text}
          </Paper>
          <Button
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
