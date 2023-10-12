import { Alert } from "@mui/material";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <Alert severity="error" sx={{ disply: "flex", justifyContent: "center" }}>
      {error}
    </Alert>
  );
};

export default ErrorMessage;
