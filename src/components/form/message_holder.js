import { Alert } from "@mui/material";

const MessageHolder = ({ message, severity }) => {
  return (
    <Alert
      severity={severity}
      sx={{
        width: "100%",
        "&.MuiAlert-message": {
          padding: "5px 0",
        },
        "&.MuiAlert-icon": {
          fontSize: "15px",
        },
      }}
    >
      {message}
    </Alert>
  );
};

export default MessageHolder;
