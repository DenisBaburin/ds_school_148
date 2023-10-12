import { DialogTitle, Stack } from "@mui/material";

interface ModalWindowProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const ModalWindow = ({ children, title, onClose }: ModalWindowProps) => {
  return (
    <>
      <Stack
        sx={{
          position: "fixed",
          backgroundColor: "black",
          opacity: 0.5,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        onClick={onClose}
      />

      <Stack
        sx={{
          width: "500px",
          padding: "5px",
          borderRadius: "15px",
          bgcolor: "white",
          position: "absolute",
          top: 30,
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        {children}
      </Stack>
    </>
  );
};

export default ModalWindow;
