import { useState } from "react";
import "./App.css";
import UserForm from "./components/dialog/UserForm";
import Table from "./components/table";
import { Button, Paper, TextField } from "@mui/material";

function App() {
  const [users, setUser] = useState(["Timofey", "Denis"]);
  const [newUser, setNewUser] = useState("");
  const addUser = () => {
    setUser([...users, newUser]);
    console.log(users);
  };
  const handleDeleteUser = (index: number) => {
    const userList = [...users];
    userList.splice(index, 1);
    setUser(userList);
    //console.log(users);
  };

  return (
    <div>
      <Button onClick={addUser}>Нажми меня</Button>
      <TextField onChange={(event) => setNewUser(event.target.value)} />
      {users.map((user, index) => (
        <Paper
          onClick={() => handleDeleteUser(index)}
          sx={{
            margin: "2px",
            backgroundColor: "greenyellow",
            color: "blue",
            display: "flex",
            justifyContent: "end",
          }}
        >
          {user}
        </Paper>
      ))}
    </div>
  );
}

export default App;
