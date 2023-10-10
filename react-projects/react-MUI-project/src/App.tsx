import { Stack } from "@mui/material";
import Users from "./components/Users";

function App() {
  return (
    <Stack
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Users />
    </Stack>
  );
}

export default App;
