import { Alert } from "@mui/material";

const Loader = () => {
  return (
    <Alert severity="info" sx={{ display: "flex", justifyContent: "center" }}>
      Loading users data...
    </Alert>
  );
};

export default Loader;
