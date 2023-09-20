import { Box } from "@mui/material";

const Bar = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "52px",
        padding: "0 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "taskHolder.main",
        color: "taskHolder.contrastText",
        zIndex: props.zIndex,
        boxShadow:
          "0px 0.3px 0.9px rgba(0,0,0,0.1),0px 1.6px 3.6px rgba(0,0,0,0.1)",
      }}
    >
      {props.children}
    </Box>
  );
};

export default Bar;
