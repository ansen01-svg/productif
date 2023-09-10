import { Box } from "@mui/material";

const InputBox = () => {
  return (
    <Box
      flexGrow={1}
      sx={{
        height: "52px",
        padding: "0 10px",
        display: "flex",
        backgroundColor: "taskHolder.main",
        color: "taskHolder.contrastText",
      }}
    >
      <Content />
    </Box>
  );
};

const Content = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <input
        type="text"
        placeholder="Add a task"
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          background: "none",
        }}
      />
    </Box>
  );
};

export default InputBox;
